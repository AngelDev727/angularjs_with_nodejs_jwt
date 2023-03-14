var http = require('http');
var mysql = require('mysql');
var CRUD = require('mysql-crud');

var connection = mysql.createPool({
    database : 'crudDB',
    user     :  'root',
    password :  'RMSrms727',
    host     :  'localhost',
    // insecureAuth : true,
    // port: 3306
});

var userCRUD = CRUD(connection, 'tbl_users');

/***********For Add student detail into database***********/ 
exports.register = function(req, res){
    console.log("req.body:", req.body);
    userCRUD.create({
        'user_name':req.body.username,
        'user_email':req.body.email,
        'user_pwd':req.body.pwd,
        'created_timestamp': new Date().toISOString
    }, function(err, val){
        if(err){
            console.log(err);
        }else{
            res.jsonp(val);
            console.log('added');
        }
    });
};

exports.login = function(req, res) {
    var email = req.body.email;
    var pwd = req.body.pwd;
        
    userCRUD.load({user_email:email}, function (err, val) { 
        res.jsonp(val[0]);
    }); 
}

    /***********For showing details of perticular students**************/ 
exports.userdetail = function(req, res) {
    var email = parseInt(req.params.email);
    userCRUD.load({user_email:email}, function (err, val) { 
        res.jsonp(val[0]);
    });  
}; 