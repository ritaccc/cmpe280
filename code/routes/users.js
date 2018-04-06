var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/userDB');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});

/* GET users listing. */
router.post('/', function(req, res, next) {
    res.render('login');
});

/* GET users list. */
router.get('/userlist', userCtrl.get_userList);

/* Login the user account*/
router.get('/login',userCtrl.login)

/* Return registration page to the user */
router.get('/register',userCtrl.register_mainpage);

/* Add new user into user DB */
router.post('/adduser',userCtrl.register);


module.exports = router;
