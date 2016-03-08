'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var StorageService = function () {
    StorageService.$inject = ["$localStorage"];
    function StorageService($localStorage) {
      _classCallCheck(this, StorageService);

      this.$localStorage = $localStorage;
    }

    _createClass(StorageService, [{
      key: 'getStats',
      value: function getStats() {
        return this.$localStorage.stats;
      }
    }, {
      key: 'setStats',
      value: function setStats(stats) {
        this.$localStorage.stats = stats;
      }
    }, {
      key: 'deleteStats',
      value: function deleteStats() {
        delete this.$localStorage.stats;
      }
    }, {
      key: 'getData',
      value: function getData() {
        return this.$localStorage.data;
      }
    }, {
      key: 'setData',
      value: function setData(data) {
        this.$localStorage.data = data;
      }
    }, {
      key: 'deleteData',
      value: function deleteData() {
        delete this.$localStorage.data;
      }
    }]);

    return StorageService;
  }();

  angular.module('dotaQuiz').service('StorageService', StorageService);
})();