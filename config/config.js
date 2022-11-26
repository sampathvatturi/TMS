const mysql = require('mysql');
const con = mysql.createConnection({
    database:'department_appr',
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port:'3310'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


module.exports = con;