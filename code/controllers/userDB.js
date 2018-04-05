/*
 * GET user list page.
 */


module.exports.get_userList = function(req, res)
{

    var db = req.db;
    var collection = db.get('user');
    collection.find({}, {},
        function(e, docs)
        {
            res.render('userlist', { "userlist" : docs });
        });
};

module.exports.login = function (req,res) {
    var db = req.db;
    var collection = db.get('user');
}

module.exports.register = function (req,res) {

    var db = req.db;
    var collection = db.get('user');

    //Get username and password
    var userName = req.body.username;
    var password = req.body.password;
}

module.exports.register_mainpage = function (req,res) {

    res.render('register');
}