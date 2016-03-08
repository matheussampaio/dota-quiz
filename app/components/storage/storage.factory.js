(function() {

  class StorageService {
   constructor($localStorage) {
     this.$localStorage = $localStorage;
   }

   getStats() {
     return this.$localStorage.stats;
   }

   setStats(stats) {
     this.$localStorage.stats = stats;
   }

   deleteStats() {
     delete this.$localStorage.stats;
   }

   getData() {
     return this.$localStorage.data;
   }

   setData(data) {
     this.$localStorage.data = data;
   }

   deleteData() {
     delete this.$localStorage.data;
   }

   getQuizLeft() {
     if (angular.isUndefined(this.$localStorage.quizLeft)) {
       this.$localStorage.quizLeft = [];
     }

     return this.$localStorage.quizLeft;
   }

   setQuizLeft(quizLeft) {
     this.$localStorage.quizLeft = quizLeft;
   }

   deleteQuizLeft() {
     delete this.$localStorage.quizLeft;
   }

 }

  angular
    .module('dotaQuiz')
    .service('StorageService', StorageService);

})();
