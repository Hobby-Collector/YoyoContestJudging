const User = require('../models/user');
const Contest = require('../models/contest');

module.exports = {
  index,
  modify,
  addContest,
  show
};

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with User.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
    .sort(sortKey).exec(function (err, user) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('/index', {
        user,
        currentUser: req.user,
        name: req.query.name,
        sortKey
      });
    });
}

function modify(req, res, next) {
  User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  ).then(function () {
    res.redirect('/user');
  })
}

function show(req, res) {
  User.findById(req.params.id)
  .populate('contests')
  .exec(function(err, user) {
    Contest.find({
      _id: {$nin: user.contests}
    }, function(err, contest) {
      res.render('users/profile', {
        title: 'Profile',
        user,
        contest
      });
    });
  });
}

function addContest(req, res, next) {
  req.user.contests.push(req.body);
  req.user.save(function(err) {
    res.redirect('/user');
  });
}