var router = require('express').Router();

var ctrlHome = require('../controller/homeController');

router.get('/', ctrlHome.index);

module.exports = router;