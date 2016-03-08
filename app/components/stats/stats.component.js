(function() {

  angular
    .module('dotaQuiz')
    .component('stats', {
      controller: StatsController,
      templateUrl: 'stats/stats.html'
    });

  function StatsController(StatsFactory) {
    const vm = this;

    vm.data = StatsFactory.data;
  }

})();
