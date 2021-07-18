const express = require("express");
const mysql = require("mysql")

// Establish a handshake database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    // connect to the default database
    database: '15Jul21'
});

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log("MySQL database connected Successfully")
})

// setup express server
const app = express();

// create new database
app.get('/createdb', (req, res) => {
    let sql = "Create database 15Jul21";
    // execute the sql query
    db.query(sql, (err, result) => {
        if (err){
            throw err;
        }
        console.log("15Jul21 database created Successfully")
    });
})

// Create a new table
app.get('/createtable', (req, res) => {
    let sql = "CREATE TABLE postings (id INT AUTO_INCREMENT, title VARCHAR(50), message VARCHAR(50), message VARCHAR(50), PRIMARY KEY(id))";
    // execute the sql query
    db.query(sql, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        console.log("Postings Table created successfully");
})

// insert a new record
app.get('/insertrow1', (req, res) => {
    let post = {title: 'First Post', message: 'This is my first post'};
    let sql = "INSERT INTO posting SET ?";
    db.query(sql, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        console.log("First row inserted successfully");
});
});

// insert another record
app.get('/insertrow2', (req, res) => {
    let post = {title: 'First Post', message: 'This is my second post'};
    let sql = "INSERT INTO posting SET ?";
    db.query(sql, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        console.log("Second row inserted successfully");
});
});

// Select rows
app.get('/getposts/:id', (req, res) => {
    let sql = `SELECT * FROM postings WHERE id = ${req.params.id}`;
    // execute the sql query
    db.query(sql, (err, result) => {
        if (err){
            throw err;
        }
        console.log(result);
        console.log("Record Retrieved successfully");
})

// UPDATE Command


// open default port and listen for connection
app.listen('3000', () => {
    console.log("local web server is running");
});