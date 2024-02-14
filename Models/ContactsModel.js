const db = require('../config/db_connection');

const User = {};

User.create = (userData, callback) => {
    db.query('INSERT INTO users SET ?', userData, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

User.getByEmail = (email, callback) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]);
    });
};

User.getById = (userId, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]);
    });
};

User.update = (userId, userData, callback) => {
    db.query('UPDATE users SET ? WHERE id = ?', [userData, userId], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

User.delete = (userId, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

module.exports = User;
