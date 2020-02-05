var express = require('express');
var router = express.Router();
const contestsCtrl = require('../controllers/contest');

/* GET contests listing. */
router.get('/:id',contestsCtrl.show);
router.delete('/',contestsCtrl.destroy);
router.put('/:id',contestsCtrl.modify);
router.post('/',contestsCtrl.create);

module.exports = router;
