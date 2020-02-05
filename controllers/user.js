const Contest = require('../models/contest');
const User = require('../models/user');

module.exports = {
  modify,
  addContest,
  show,
  destroy
};

function modify(req, res, next) {
  User.findById(req.params.id,function(err,user) {
    user.contests.push(req.body.contest);
    user.save(function (err) {
      res.redirect(`/users/${user.id}`);
    });
})};

function show(req, res) {
  User.findById(req.params.id)
    .populate('contests')
    .exec(function (err, user) {
      Contest.find({ _id: { $nin: user.contests }
      }, function (err, contest) { User.find({_id: { $nin: user }
        }, function (err, users) {
          res.render('users/profile', {
            title: 'Profile',
            user,
            contest,
            users
          });
        });
      });
    });
}

function addContest(req, res, next) {
  req.user.contests.push(req.body);
  req.user.save(function (err) {
    res.redirect('/');
  });
}

function destroy(req, res, next) {
  User.findByIdAndDelete(
    req.body.user
  ).then(function () {
    res.redirect('/');
  })
}