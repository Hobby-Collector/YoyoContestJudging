const Contest = require('../models/contest');
const User = require('../models/user');

module.exports = {
    modify,
    create,
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
    Contest.findById(red.body.id, function (err, contest) {
        res.render('/contests/show', {
            title: `${contest.name}`,
            user: req.user,
            contest
        });
    })
}

function create(req, res, next) {
    req.body.admin = req.user.id;
    var newContest = new Contest(req.body);
    newContest.save(function (err) {
        if (err) {
            console.log(err);
            res.redirect(`users/${req.user.id}`);
        }else{console.log(newContest)};
    });
    console.log(newContest);
    //User.findByIdAndUpdate(req.user.id, { $push: { "contests": "5df026a06c119173660b47db" } });
    req.user.contests.push(newContest._id);
    req.user.save(err=>{
        res.redirect(`users/${req.user.id}`);
    });
}

function destroy(req, res, next) {
    Contest.findByIdAndDelete(
        req.params.id,
    ).then(function () {
        res.redirect('/');
    })
}