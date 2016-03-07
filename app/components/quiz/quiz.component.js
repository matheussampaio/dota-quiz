(function() {

  angular
    .module('dotaQuiz')
    .component('quiz', {
      controller: QuizController,
      templateUrl: 'quiz/quiz.html'
    });

  function QuizController(QuizFactory) {
    const vm = this;

    vm.data = QuizFactory.data;
    vm.getIconName = QuizFactory.getIconName;
    vm.select = QuizFactory.select;
    vm.unselect = QuizFactory.unselect;

    activate();

    ///////////////

    function activate() {
      QuizFactory.start();
    }

  }

})();
