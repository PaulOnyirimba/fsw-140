var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , http = require('http')
    , path = require('path')

var session = require('express-session');
var app = express();
var mysql = require('mysql');
var bodyParser = require("body-parser");
var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database : '15Jul21'
});

connection.connect();

global.db = connection;

// app.set('port', process.env)
// app.set
// app.set
// app.use
// app.use
// app.use