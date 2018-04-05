var express = require('express');
var router = express.Router();
var userCtrl = require("../controllers/userDB");

console.log("Router:");
console.log(router);

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});


/* GET users list. */
router.get('/userlist', userCtrl.get_userList);

/* Login the user account*/
router.get('/login',userCtrl.login)

/* Add new user into user DB */
router.post('/register',userCtrl.register_mainpage);

module.exports = router;
