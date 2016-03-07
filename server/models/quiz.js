const restful = require('node-restful');
const mongoose = restful.mongoose;

// Plugins
const random = require('mongoose-random');
const deepPopulate = require('mongoose-deep-populate')(mongoose);

const Item = require('./item');

const QuizSchema = new mongoose.Schema({
    target: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'item',
      required: true
    },
    wrong: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'item',
      required: true
    }]
  })
  .plugin(random)
  .plugin(deepPopulate);

const QuizModel = restful.model('quiz', QuizSchema)
  .methods(['get', 'post', 'put', 'delete'])
  .before('post', changeNameToIds)
  .route('random.get', getRandomQuiz);

QuizModel.syncRandom(function (err, result) {
  console.log(result.updated);
});

function getRandomQuiz(req, res, next) {
  QuizModel
    .findRandom()
    .limit(1)
    .select('type target wrong')
    .deepPopulate('target.requirements wrong')
    .exec((err, quiz) => {
      if (quiz) {
        res.status(200).send(quiz);
      } else {
        res.send(500).send({ error: 'Something went wrong when geting a random quiz.' });
      }
    });
}

function changeNameToIds(req, res, next) {
  let count = 0;

  getItemByName(res, req.body.target, item => {
    req.body.target = item._id;

    count += 1;

    if (count == req.body.wrong.length + 1) {
      return next();
    }
  });

  for (let i = 0; i < req.body.wrong.length; i++) {
    getItemByName(res, req.body.wrong[i], item => {
      req.body.wrong[i] = item._id;

      count += 1;

      if (count == req.body.wrong.length + 1) {
        return next();
      }
    });
  }
}

function getItemByName(res, name, next) {
  Item.findOne({ name: name }, (err, item) => {
    if (item) {
      return next(item);
    }

    res.status(404).send({ error: `Item not found: '${name}'.` });
  });
}

module.exports = QuizModel;
