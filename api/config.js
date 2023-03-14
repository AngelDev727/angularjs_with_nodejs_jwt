var http = require('http');
var mysql = require('mysql');
var CRUD = require('mysql-crud');

var connection = mysql.createPool({
    database : 'crudDB',
    user     :  'root',
    password :  'Test164630',
    host     :  'localhost',
    insecureAuth : true
});
