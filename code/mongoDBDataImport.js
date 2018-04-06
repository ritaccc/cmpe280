//MongoDB setup
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/280_assignment');

var collection = db.get('user');

//random function to generator user's account name, password, last name and first name
function makeInfo(inputType) {
    var text = "";
    var number_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var capital_letter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var num_count = Math.floor(Math.random()*10)+4;
    var i = 0;
    if(inputType==="number_letter")
    {
        for (; i < num_count; i++)
            text += number_letter.charAt(Math.floor(Math.random() * number_letter.length));
    }
    else if(inputType==="letter"){
        for (; i < num_count; i++)
            text += letter.charAt(Math.floor(Math.random() * letter.length));
    }
    else{
        for (; i < num_count; i++)
            text += capital_letter.charAt(Math.floor(Math.random() * capital_letter.length));
    }

    return text;
}

var count = 0;
for(var j = 0;j<10;j++)
{
    var userName = makeInfo("letter")+"@hotmail.com";
    var password = makeInfo("number_letter");
    var lastName = makeInfo("capital_letter");
    var firstName = makeInfo("capital_letter");
    var result = collection.find({"user_name":userName});

    if(result.length!==0){
        //the account name is not exist in the database, insert the user info to the database
        collection.insert({"user_name":userName,"password":password,"last_name":lastName,"first_name":firstName},function(err,doc){
            if(err)
            {
                res.send("connection error with mongodb");
            }
            else{
                count+=1;
            }
        });
    }

}


//check if the user account is registered or not
