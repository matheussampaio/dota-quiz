var restful = require('node-restful');
var mongoose = restful.mongoose;

var Item = restful.model('item', new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    requirements: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'item'
    }]
  }))
  .methods(['get', 'post', 'put', 'delete'])
  .before('post', changeNameToIds);

function changeNameToIds(req, res, next) {
  if (!req.body.requirements) {
    return next();
  }

  let count = 0;

  for (let i = 0; i < req.body.requirements.length; i++) {
    getItemByName(res, req.body.requirements[i], item => {
      req.body.requirements[i] = item._id;

      count += 1;

      if (count == req.body.requirements.length) {
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


module.exports = Item;
