const Contest = require('../models/contest');
const User = require('../models/user');

module.exports = {
  modify,
  addContest,
  show
};


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
    .exec(function (err, user) {
      Contest.find({
        _id: { $nin: user.contests }
      }, function (err, contest) {
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
  req.user.save(function (err) {
    res.redirect('/user');
  });
}