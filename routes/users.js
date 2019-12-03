var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/user');

/* GET users listing. */
router.get('/:id',usersCtrl.show);

module.exports = router;
