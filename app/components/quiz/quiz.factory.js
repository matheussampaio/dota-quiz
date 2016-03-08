'use strict';

(function () {

  QuizFactory.$inject = ["$log", "$rootScope", "_", "DataService", "StatsFactory", "StorageService"];
  angular.module('dotaQuiz').factory('QuizFactory', QuizFactory);

  function QuizFactory($log, $rootScope, _, DataService, StatsFactory, StorageService) {
    var _unknownObject = {
      icon: 'assets/images/icon/unknown.png',
      alt: 'Unknown Icon',
      unknown: true
    };

    var factory = {
      select: select,
      unselect: unselect,
      start: start,
      data: {}
    };

    return factory;

    ///////////////////

    function start() {
      StatsFactory.start();

      if (angular.isDefined(StorageService.getData())) {
        $log.info('using data from $localStorage...');
        // skip fetch if there already a quiz in loca storage
        _.assign(factory.data, StorageService.getData());
      } else {
        _fetchQuiz();
      }
    }

    function _reset() {
      StatsFactory.reset();
      _fetchQuiz();
    }

    function select(item) {
      if (!item.selected) {
        for (var i in factory.data.answers) {
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
      var item = factory.data.answers[index];

      if (!item.unknown) {
        item.selected = false;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = factory.data.choices[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            if (i.index === item.index) {
              i.selected = false;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        factory.data.answers[index] = _.cloneDeep(_unknownObject);
      }
    }

    function _fetchQuiz() {
      $log.info('fetching a new quiz...');

      DataService.getRandomQuiz().then(function (quiz) {
        console.log('data', quiz);
        _populateData(quiz);
        if (!DataService.USER_API) {
          $rootScope.$digest();
        }
      });
    }

    function _populateData(quiz) {
      quiz.target.icon = _getIconName(quiz.target.name);

      var answers = quiz.target.requirements.map(function (req) {
        return _.cloneDeep(_unknownObject);
      });
      var choices = _.shuffle(_.concat(quiz.target.requirements, quiz.wrong));
      choices.forEach(function (c, i) {
        c.icon = _getIconName(c.name);
        c.index = i;
      });

      factory.data.target = quiz.target;
      factory.data.answers = answers;
      factory.data.choices = choices;

      StorageService.setData(factory.data);
    }

    function _getIconName(name) {
      var iconName = name.toLowerCase().replace(/ /g, '_');
      return 'assets/images/icon/' + iconName + '.png';
    }

    function _answerComplete() {
      var complete = true;

      factory.data.answers.forEach(function (answer) {
        if (answer.unknown === true) {
          complete = false;
        }
      });

      return complete;
    }

    function _validateAnswer() {
      var answer = _.sortBy(factory.data.answers.map(function (answer) {
        return answer.name;
      }), function (e) {
        return e;
      });
      var requirements = _.sortBy(factory.data.target.requirements.map(function (requirement) {
        return requirement.name;
      }), function (e) {
        return e;
      });

      var answerCorrect = _.isEqual(answer, requirements);

      if (answerCorrect) {
        _handleCorrectAnswer();
      } else {
        _handleIncorrectAnswer();
      }
    }

    function _handleCorrectAnswer() {
      $log.info('correct answer!');
      StatsFactory.correct();
      _fetchQuiz();
    }

    function _handleIncorrectAnswer() {
      $log.info('wrong answer. :(');

      var guessesLeft = StatsFactory.incorrect();

      if (guessesLeft <= 0) {
        alert('Final Score: ' + StatsFactory.getScore());
        _reset();
      }
    }
  }
})();