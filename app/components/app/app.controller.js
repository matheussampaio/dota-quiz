(function() {

  angular
    .module('dotaQuiz')
    .controller('AppController', AppController);

  function AppController(API) {
    const vm = this;

    vm.data = {};

    activate();

    ////////////////////

    function activate() {
      vm.data.quiz = API.Quiz.query();
    }

  }

})();
