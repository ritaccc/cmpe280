var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET home page. */
router.get('/main_page', function(req, res, next) {
    res.render('main_page_2');
});

router.post('/main_page', function(req, res) {
    res.render('main_page_2');
});

/* GET home page. */
router.get('/register', function(req, res, next) {
    res.render('register');
});


/* GET home page. */
router.get('/hello', function(req, res, next) {
    res.render('hello');
});

router.post('/hello', function(req, res) {
    res.render('hello');
});

module.exports = router;
