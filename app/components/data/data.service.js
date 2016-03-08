"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

  var quiz = [{
    "target": "Medallion of Courage",
    "wrong": ["Broadsword", "Robe of the Magi", "Talisman of Evasion"]
  }, {
    "target": "Solar Crest",
    "wrong": ["Broadsword", "Robe of the Magi", "Chainmail", "Sage's Mask", "Recipe"]
  }];
  var items = [{
    "name": "Recipe"
  }, {
    "name": "Broadsword"
  }, {
    "name": "Robe of the Magi"
  }, {
    "name": "Chainmail"
  }, {
    "name": "Sage's Mask"
  }, {
    "name": "Talisman of Evasion"
  }, {
    "name": "Blade Mail",
    "requirements": ["Broadsword", "Chainmail", "Robe of the Magi"]
  }, {
    "name": "Medallion of Courage",
    "requirements": ["Chainmail", "Sage's Mask", "Recipe"]
  }, {
    "name": "Solar Crest",
    "requirements": ["Medallion of Courage", "Talisman of Evasion"]
  }];

  var DataService = function () {
    DataService.$inject = ["_", "API"];
    function DataService(_, API) {
      _classCallCheck(this, DataService);

      this._ = _;
      this.API = API;
      this.quiz = quiz;
      this.items = items;

      this.USER_API = false;
    }

    _createClass(DataService, [{
      key: "getRandomQuiz",
      value: function getRandomQuiz() {
        var _this = this;

        if (this.USER_API) {
          console.log('getting random quiz from api...');
          return this.API.Quiz.query().$promise.then(function (data) {
            return data[0];
          });
        } else {
          console.log('getting random quiz from local...');
          return new Promise(function (resolve) {
            var quiz = _.cloneDeep(_this._.sample(_this.quiz));

            quiz.target = _this.getItem(quiz.target);

            quiz.target.requirements.forEach(function (e, i) {
              quiz.target.requirements[i] = _this.getItem(e);
            });

            quiz.wrong.forEach(function (e, i) {
              quiz.wrong[i] = _this.getItem(e);
            });

            resolve(quiz);
          });
        }
      }
    }, {
      key: "getItem",
      value: function getItem(name) {
        return _.cloneDeep(this._.find(this.items, { name: name }));
      }
    }]);

    return DataService;
  }();

  angular.module('dotaQuiz').service('DataService', DataService);
})();