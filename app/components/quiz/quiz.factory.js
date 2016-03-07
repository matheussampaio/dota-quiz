(function() {

  angular
    .module('dotaQuiz')
    .factory('QuizFactory', QuizFactory);

  function QuizFactory(_, API) {
    const _unknownObject = {
      icon: 'assets/images/icon/unknown.png',
      alt: 'Unknown Icon',
      unknown: true
    };

    const factory = {
      select: select,
      unselect: unselect,
      getIconName: getIconName,
      start: start,
      data: {}
    }

    return factory;

    ///////////////////

    function start() {
      API.Quiz.query().$promise.then(data => {
        const quiz = data[0];

        console.log(quiz);

        quiz.target.icon = getIconName(quiz.target.name);

        const answers = quiz.target.requirements.map(req => _.cloneDeep(_unknownObject));
        const choices = _.shuffle(_.concat(quiz.target.requirements, quiz.wrong));
        choices.forEach(c => c.icon = getIconName(c.name));

        factory.data.target = quiz.target;
        factory.data.answers = answers;
        factory.data.choices = choices;
      });
    }

    function getIconName(name) {
      const iconName = name.toLowerCase().replace(/ /g, '_');
      return `assets/images/icon/${iconName}.png`;
    }

    function select(item) {
      if (!item.selected) {
        for (let i in factory.data.answers) {
          if (factory.data.answers[i].unknown === true) {
            item.selected = true;
            factory.data.answers[i] = item;
            break;
          }
        }

        if (answerComplete()) {
          validateAnswer();
        }
      }
    }

    function unselect(index) {
      let item = factory.data.answers[index];

      if (!item.unknown) {
        item.selected = false;

        factory.data.answers[index] = _.cloneDeep(_unknownObject);
      }
    }

    function answerComplete() {
      let complete = true;

      factory.data.answers.forEach(answer => {
        if (answer.unknown === true) {
          complete = false;
        }
      });

      return complete;
    }

    function validateAnswer() {
      const answer = _.sortBy(factory.data.answers.map(answer => answer.name), e => e);
      const requirements = _.sortBy(factory.data.target.requirements.map(requirement => requirement.name), e => e);

      const answerCorrect = _.isEqual(answer, requirements);

      console.log('answer:', answerCorrect);
    }
  }

})();
