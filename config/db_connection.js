// connect to contact database mysql

const mysql = require('mysql');
const dotenv = require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((err) => {
    if (err) {
        throw err;
        process.exit(1);
    }
    console.log('Connected to database');
});

module.exports = db;