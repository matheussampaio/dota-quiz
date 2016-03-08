'use strict';

(function () {

  QuizController.$inject = ["QuizFactory"];
  angular.module('dotaQuiz').component('quiz', {
    controller: QuizController,
    templateUrl: 'quiz/quiz.html'
  });

  function QuizController(QuizFactory) {
    var vm = this;

    vm.data = QuizFactory.data;
    vm.select = QuizFactory.select;
    vm.unselect = QuizFactory.unselect;

    activate();

    ///////////////

    function activate() {
      QuizFactory.start();
    }
  }
})();