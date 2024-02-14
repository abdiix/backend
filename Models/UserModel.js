const db = require('../config/db_connection');

const User = {};

// Create a new user
User.create = (userData, callback) => {
    db.query('INSERT INTO users SET ?', userData, (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results.insertId);
    });
};

// Get all users
User.getAll = (callback) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results);
    });
};

// Get user by ID
User.getById = (userId, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            return callback(err);
        }
        if (results.length === 0) {
            // User not found
            return callback(null, null);
        }
        callback(null, results[0]);
    });
};

// Update user by ID
User.update = (userId, userData, callback) => {
    db.query('UPDATE users SET ? WHERE id = ?', [userData, userId], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results.affectedRows > 0);
    });
};

// Delete user by ID
User.delete = (userId, callback) => {
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results.affectedRows > 0);
    });
};

module.exports = User;
