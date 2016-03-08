(function() {

  angular
    .module('dotaQuiz')
    .factory('StatsFactory', StatsFactory);

  function StatsFactory(Log, StorageService) {
    const _DefaultStats = {
      inRow: 0,
      score: 0,
      guesses: 3
    }

    const factory = {
      start: start,
      reset: reset,
      correct: correct,
      incorrect: incorrect,
      getScore: getScore,
      data: {}
    }

    return factory;

    ///////////////////

    function start() {
      if (angular.isUndefined(StorageService.getStats())) {
        StorageService.setStats(_DefaultStats);
        Log.info('Stats not found in localStorage, creating a new one.');
      } else {
        Log.info('Stats found in localStorage, using it.');
      }

      factory.data = StorageService.getStats();
    }

    function reset() {
      Log.info('Reseting Stats...');
      _.assign(factory.data, _DefaultStats);
    }

    function incorrect() {
      factory.data.guesses -= 1;
      factory.data.inRow = 0;

      return factory.data.guesses;
    }

    function correct() {
      const base = 200;
      const bonus = 30;

      factory.data.score += base + (bonus * factory.data.inRow);
      factory.data.inRow += 1;
    }

    function getScore() {
      return factory.data.score;
    }
  }

})();
