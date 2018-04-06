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

/* return user update web page*/
router.get('/:user_name',userCtrl.update_page);

/* Update the users list*/
router.post('/updateuser',userCtrl.update_user);


/* delete the users list*/
router.post('/deleteuser',userCtrl.delete_user);
module.exports = router;
