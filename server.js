var connect = require('connect');
var app = connect();
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var path = require('path');
var app = require('express')();

app.use(bodyParser.json({ limit: '50mb', extended: true, type:'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, type:'application/x-www-form-urlencoding' }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ limit: '50mb' }));

var http = require("http").createServer(app);
var public = connect();
var AuthApi = require('./api/auth');
var studentApi = require('./api/student');

public.use(serveStatic('public'));
app.use('/', public);

app.post('/api/login', AuthApi.login);

app.post('/api/student',studentApi.student);
app.get('/api/allstudent',studentApi.allstudent);
app.post('/api/studentUpdate/:id', studentApi.updateStudent);
app.get('/api/studentDetail/:id', studentApi.studentdetail);
app.get('/api/deleteStudents/:id', studentApi.deleteStudent);


app.listen(7000, function(){
    console.log("Server started on 7000....");
});