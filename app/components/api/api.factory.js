'use strict';

(function () {

  API.$inject = ["$resource"];
  angular.module('dotaQuiz').factory('API', API);

  function API($resource) {
    // If you want to use `$ ionic serve`, uncomment this line.
    var DOMAIN = '/api';

    var vm = {
      Quiz: getQuizResource()
    };

    return vm;

    ///////////////////

    function getQuizResource() {
      return $resource(DOMAIN + '/quiz/random');
    }
  }
})();