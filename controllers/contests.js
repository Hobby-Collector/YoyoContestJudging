const Contest = require('../models/contest');
const User = require('../models/user');

module.exports = {
    new: newContest,
    modify,
    addContest,
    show,
    destroy
};


function modify(req, res, next) {
    Contest.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    ).then(function () {
        res.redirect('/');
    })
}

function show(req, res) {
    Contest.findById(req.params.id)
        .populate('contests')
        .exec(function (err, user) {
            Contest.find({
                _id: { $nin: user.contests }
            }, function (err, contest) {
                Contest.find({
                    _id: { $nin: user }
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

function newContest(req, res, next) {
    req.user.contests.push(req.body);
    req.user.save(function (err) {
        res.redirect('/');
    });
}

function destroy(req, res, next) {
    Contest.findByIdAndDelete(
        req.params.id,
    ).then(function () {
        res.redirect('/');
    })
}