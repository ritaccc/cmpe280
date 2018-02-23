var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET home page. */
router.get('/main_page', function(req, res, next) {
    res.render('main_page');
});

router.post('/main_page', function(req, res) {
    res.render('main_page');
});

/* GET home page. */
router.get('/register', function(req, res, next) {
    res.render('register');
});

module.exports = router;
