(function() {

  angular
    .module('dotaQuiz')
    .factory('API', API);

  function API($resource) {
    // If you want to use `$ ionic serve`, uncomment this line.
    const DOMAIN = `/api`;

    const vm = {
      Quiz: getQuizResource(),
    }

    return vm;

    ///////////////////

    function getQuizResource() {
      return $resource(DOMAIN + `/quiz/random`);
    }
  }

})();
