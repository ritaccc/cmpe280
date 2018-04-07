/*
 * GET user list page.
 */


module.exports.get_userList = function (req, res) {

    var db = req.db;
    var collection = db.get('user');
    collection.find({}, {},
        function (e, docs) {
            res.render('userlist', {"userlist": docs});
        });
};

module.exports.login = function (req, res) {
    var db = req.db;
    var collection = db.get('user');
    var userName = req.body.user_name;
    var password = req.body.password;

    //check if the user account is registered or not
    var cursor = collection.find({"user_name": userName, "password": password}, function (err, result) {
        if (err) {
            res.send("connection error with mongodb");
        }
        else if (result.length !== 0) {
            //the account name is not exist in the database, insert the user info to the database
            res.redirect("/main_page");

        }
        else {
            res.render("login");
        }

    });
    //res.render('login');
};

module.exports.register = function (req, res) {

    var db = req.db;
    var collection = db.get('user');

    //Get username, password, first name and last name from form
    var userName = req.body.username;
    var password = req.body.password;
    var lastName = req.body.lastname;
    var firstName = req.body.firstname;


    //check if the user account is registered or not
    var cursor = collection.find({"user_name": userName}, function (err, result) {
        if (err) {
            res.send("connection error with mongodb");
        }
        if (result.length === 0) {
            //the account name is not exist in the database, insert the user info to the database
            collection.insert({
                "user_name": userName,
                "password": password,
                "last_name": lastName,
                "first_name": firstName
            }, function (err, doc) {
                if (err) {
                    res.send("connection error with mongodb");
                }
                else {
                    //Forward to success page
                    res.redirect("/user/userlist");
                }
            });
        }
    });

};

module.exports.update_user = function (req, res) {

    var db = req.db;

    //Get username, password, first name and last name from form
    var userName = req.body.username;
    var password = req.body.password;
    var lastName = req.body.lastname;
    var firstName = req.body.firstname;

    var collection = db.get('user');

    collection.update(
        {
            "user_name": userName
        },
        {
            $set: {
                "password": password,
                "last_name": lastName,
                "first_name": firstName
            }, $currentDate: {lastModified: true}
        }
    ).then(function (result) {
        res.redirect("/user/userlist");
    })
};

module.exports.delete_user = function (req, res) {

    var db = req.db;

    //Get username, password, first name and last name from form
    var userName = req.body.username;

    var collection = db.get('user');

    //check if the user account is registered or not
    collection.remove({"user_name": userName}).then(function (err, result) {
            res.redirect("/user/userlist");
        }
    );


};

module.exports.update_page = function (req, res) {

    var db = req.db;

    //Get username, password, first name and last name from form
    var userName = req.params.user_name;
    var collection = db.get('user');

    //check if the user account is registered or not
    var cursor = collection.find({"user_name": userName}, function (err, result) {
        if (err) {
            res.send("connection error with mongodb");
        }
        if (result.length !== 0) {
            res.render('post', {"userlist": result});
        }
    });
};

module.exports.register_mainpage = function (req, res) {
    res.render(userName);
};