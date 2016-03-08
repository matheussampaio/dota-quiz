'use strict';

(function () {

  StatsController.$inject = ["StatsFactory"];
  angular.module('dotaQuiz').component('stats', {
    controller: StatsController,
    templateUrl: 'stats/stats.html'
  });

  function StatsController(StatsFactory) {
    var vm = this;

    vm.data = StatsFactory.data;
  }
})();