(function() {

  const quiz = [
    {
      "target": "Medallion of Courage",
      "wrong": [
        "Broadsword",
        "Robe of the Magi",
        "Talisman of Evasion"
      ]
    },
    {
      "target": "Solar Crest",
      "wrong": [
        "Broadsword",
        "Robe of the Magi",
        "Chainmail",
        "Sage's Mask",
        "Recipe"
      ]
    }
  ];
  const items = [
    {
      "name": "Recipe"
    },
    {
      "name": "Broadsword"
    },
    {
      "name": "Robe of the Magi"
    },
    {
      "name": "Chainmail"
    },
    {
      "name": "Sage's Mask"
    },
    {
      "name": "Talisman of Evasion"
    },
    {
      "name": "Blade Mail",
      "requirements": [
        "Broadsword",
        "Chainmail",
        "Robe of the Magi"
      ]
    },
    {
      "name": "Medallion of Courage",
      "requirements": [
        "Chainmail",
        "Sage's Mask",
        "Recipe"
      ]
    },
    {
      "name": "Solar Crest",
      "requirements": [
        "Medallion of Courage",
        "Talisman of Evasion"
      ]
    }
  ];

  class DataService {
    constructor(_, API) {
      this._ = _;
      this.API = API;
      this.quiz = quiz;
      this.items = items;

      this.USER_API = false;
    }

    getRandomQuiz() {
      if (this.USER_API) {
        console.log('getting random quiz from api...');
        return this.API.Quiz.query().$promise.then(data => data[0]);
      } else {
        console.log('getting random quiz from local...');
        return new Promise(resolve => {
          const quiz = _.cloneDeep(this._.sample(this.quiz));

          quiz.target = this.getItem(quiz.target);

          quiz.target.requirements.forEach((e, i) => {
            quiz.target.requirements[i] = this.getItem(e);
          });

          quiz.wrong.forEach((e, i) => {
            quiz.wrong[i] = this.getItem(e);
          });

          resolve(quiz);
        });
      }
    }

    getItem(name) {
      return _.cloneDeep(this._.find(this.items, { name: name }));
    }
  }

  angular
    .module('dotaQuiz')
    .service('DataService', DataService);

})();
