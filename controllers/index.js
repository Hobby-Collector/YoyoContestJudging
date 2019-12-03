const Contest = require('../models/contest');

module.exports = {
  index
};

function index(req, res, next) {
  Contest.findById({}).populate('divisions').exec(function (err, contests) {
    res.render('./index', {
      title: 'Yo-yo Contests',
      contests,
      user: req.user
    });
  });
}