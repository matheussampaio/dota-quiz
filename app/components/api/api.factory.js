(function() {

  angular
    .module('dotaQuiz')
    .factory('API', API);

  function API($resource) {
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
