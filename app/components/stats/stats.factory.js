'use strict';

(function () {

  StatsFactory.$inject = ["$log", "StorageService"];
  angular.module('dotaQuiz').factory('StatsFactory', StatsFactory);

  function StatsFactory($log, StorageService) {
    var _DefaultStats = {
      inRow: 0,
      score: 0,
      guesses: 3
    };

    var factory = {
      start: start,
      reset: reset,
      correct: correct,
      incorrect: incorrect,
      getScore: getScore,
      data: {}
    };

    return factory;

    ///////////////////

    function start() {
      if (angular.isUndefined(StorageService.getStats())) {
        StorageService.setStats(_DefaultStats);
      } else {
        $log.info('using stats from $localStorage...');
      }

      factory.data = StorageService.getStats();
    }

    function reset() {
      _.assign(factory.data, _DefaultStats);
    }

    function incorrect() {
      factory.data.guesses -= 1;
      factory.data.inRow = 0;

      return factory.data.guesses;
    }

    function correct() {
      var base = 200;
      var bonus = 30;

      factory.data.score += base + bonus * factory.data.inRow;
      factory.data.inRow += 1;
    }

    function getScore() {
      return factory.data.score;
    }
  }
})();