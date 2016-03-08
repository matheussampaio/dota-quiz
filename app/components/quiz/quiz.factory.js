(function() {

  angular
    .module('dotaQuiz')
    .factory('QuizFactory', QuizFactory);

  function QuizFactory($rootScope, _, Log, DataService, StatsFactory, StorageService) {
    const _unknownObject = {
      icon: 'assets/images/icon/unknown.png',
      alt: 'Unknown Icon',
      unknown: true
    };

    const factory = {
      select: select,
      unselect: unselect,
      start: start,
      data: {}
    }

    return factory;

    ///////////////////

    function start() {
      StatsFactory.start();

      if (angular.isDefined(StorageService.getData())) {
        Log.info('Quiz found in localStorage, using it.');
        // skip fetch if there already a quiz in loca storage
        _.assign(factory.data, StorageService.getData());
      } else {
        _fetchQuiz();
      }
    }

    function _reset() {
      DataService.reset();
      StatsFactory.reset();
      _fetchQuiz();
    }

    function select(item) {
      if (!item.selected) {
        Log.info(`Item selected:`, item);

        for (let i in factory.data.answers) {
          if (factory.data.answers[i].unknown === true) {
            item.selected = true;
            factory.data.answers[i] = item;
            break;
          }
        }

        if (_answerComplete()) {
          _validateAnswer();
        }
      }
    }

    function unselect(index) {
      let item = factory.data.answers[index];

      if (!item.unknown) {
        Log.info(`Item unselected:`, item);

        item.selected = false;

        for (let i of factory.data.choices) {
          if (i.index === item.index) {
            i.selected = false;
          }
        }

        factory.data.answers[index] = _.cloneDeep(_unknownObject);
      }
    }

    function _fetchQuiz() {
      DataService.getRandomQuiz().then(quiz => {
        _populateData(quiz);
        $rootScope.$digest();
      });
    }

    function _populateData(quiz) {
      Log.info('Updating UI with new Quiz');

      quiz.target.icon = _getIconName(quiz.target.name);

      const answers = quiz.target.requirements.map(req => _.cloneDeep(_unknownObject));
      const choices = _.shuffle(_.concat(quiz.target.requirements, quiz.wrong));
      choices.forEach((c, i) => {
        c.icon = _getIconName(c.name)
        c.index = i;
      });

      factory.data.target = quiz.target;
      factory.data.answers = answers;
      factory.data.choices = choices;

      StorageService.setData(factory.data);
    }

    function _getIconName(name) {
      const iconName = name.toLowerCase().replace(/ /g, '_');
      return `assets/images/icon/${iconName}.png`;
    }

    function _answerComplete() {
      let complete = true;

      factory.data.answers.forEach(answer => {
        if (answer.unknown === true) {
          complete = false;
        }
      });

      return complete;
    }

    function _validateAnswer() {
      const answer = _.sortBy(factory.data.answers.map(answer => answer.name), e => e);
      const requirements = _.sortBy(factory.data.target.requirements.map(requirement => requirement.name), e => e);

      const answerCorrect = _.isEqual(answer, requirements);

      if (answerCorrect) {
        _handleCorrectAnswer();
      } else {
        _handleIncorrectAnswer();
      }
    }

    function _handleCorrectAnswer() {
      Log.info('Correct answer.');
      StatsFactory.correct();

      if (StorageService.getQuizLeft().length > 0) {
        _fetchQuiz();
      } else {
        Log.info('No quiz left, end of the game.');
        alert(`Congratulation! You finished the Quiz with: ${StatsFactory.getScore()}`);
        _reset();
      }
    }

    function _handleIncorrectAnswer() {
      Log.info('Wrong answer.');

      const guessesLeft = StatsFactory.incorrect();

      Log.info(`Guesses: ${guessesLeft}`);

      if (guessesLeft <= 0) {
        Log.info(`You lose.`);
        alert(`Final Score: ${StatsFactory.getScore()}`);
        _reset();
      }
    }
  }

})();
