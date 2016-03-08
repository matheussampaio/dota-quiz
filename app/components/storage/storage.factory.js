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
 }

  angular
    .module('dotaQuiz')
    .service('StorageService', StorageService);

})();
