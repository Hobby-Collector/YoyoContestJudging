const User = require('../models/user');

module.exports = {
  index,
  addFact,
  delFact
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with User.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, user) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('user/index', {
      user,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}

function addFact(req, res, next) {
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/user');
  });
}

function delFact(req, res, next) {
  User.findOne({'facts._id': req.params.id}, function(err, student) {
    student.facts.id(req.params.id).remove();
    student.save(function(err) {
      res.redirect('/user');
    });
  });
}