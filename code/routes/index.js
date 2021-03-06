var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
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

/* Get Search Filter Page. */
router.get('/filter', function(req, res, next) {
    res.render('filter');
});




module.exports = router;
