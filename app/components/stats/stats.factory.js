(function() {

  angular
    .module('dotaQuiz')
    .factory('StatsFactory', StatsFactory);

  function StatsFactory() {
      const factory = {
        inRow: 0,
        score: 0,
        guesses: 3
      }

      return factory;

      ///////////////////
  }

})();
