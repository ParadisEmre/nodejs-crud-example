var router = require('express').Router();

var ctrlLogin = require('../controller/loginController');

router.get('/', ctrlLogin.index);
router.post('/', ctrlLogin.indexPost);
router.get('/signup', ctrlLogin.signUpGet);
router.post('/signup', ctrlLogin.signUpPost);
router.get('/userList', ctrlLogin.userList);
router.get('/deleteUser/:username', ctrlLogin.deleteUser);


module.exports = router;