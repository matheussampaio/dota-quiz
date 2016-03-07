(function() {

  angular
    .module('dotaQuiz')
    .component('quiz', {
      bindings: {
        data: '='
      },
      controller: QuizController,
      templateUrl: 'quiz/quiz.html'
    });

  function QuizController(_) {
    const vm = this;

    vm.getIconName = getIconName;
    vm.select = select;
    vm.unselect = unselect;

    activate();

    ///////////////

    function activate() {
      vm.iconTarget = getIconName(vm.data.target.name);

      vm.answers = vm.data.target.requirements.map(req => {
        return {
          icon: 'assets/images/icon/unknown.png',
          alt: 'Unknown Icon',
          unknown: true
        }
      });

      vm.choices = _.shuffle(_.concat(vm.data.target.requirements, vm.data.wrong));
      vm.choices.forEach(c => c.icon = getIconName(c.name));
    }

    function getIconName(name) {
      const iconName = name.toLowerCase().replace(/ /g, '_');
      return `assets/images/icon/${iconName}.png`;
    }

    function select(item) {
      if (!item.selected) {
        for (let i in vm.answers) {
          if (vm.answers[i].unknown === true) {
            item.selected = true;
            vm.answers[i] = item;
            break;
          }
        }

        if (answerComplete()) {
          validateAnswer();
        }
      }
    }

    function unselect(index) {
      let item = vm.answers[index];

      if (!item.unknown) {
        item.selected = false;

        vm.answers[index] = {
          icon: 'assets/images/icon/unknown.png',
          alt: 'Unknown Icon',
          unknown: true
        };
      }
    }

    function answerComplete() {
      let complete = true;

      vm.answers.forEach(answer => {
        if (answer.unknown === true) {
          complete = false;
        }
      });

      return complete;
    }

    function validateAnswer() {
      const answer = _.sortBy(vm.answers.map(answer => answer.name), e => e);
      const requirements = _.sortBy(vm.data.target.requirements.map(requirement => requirement.name), e => e);

      const answerCorrect = _.isEqual(answer, requirements);

      alert(answerCorrect);
    }

  }

})();
