const asyncHandler = require('express-async-handler');
const User = require('../Models/UserModel'); // Assuming your User model file is named User.js

// @desc Get all users
// @route GET /api/users
// @access Public
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.getAll(); 
    res.status(200).json({ success: true, data: users });
    console.log('User data:', users);
});

// @desc Get a single user by ID
// @route GET /api/users/:id 
// @access Public
const getUserById = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const user = await User.getById(userId); 
    if (!user) {
        res.status(404).json({ success: false, message: 'User not found' });
        return;
    }
    res.status(200).json({ success: true, data: user });
});

// @desc Create a new user 
// @route POST /api/users
// @access Public
const createUser = asyncHandler(async (req, res) => {
    const userData = req.body;
    const newUser = await User.create(userData); // Assuming you have a method to create a user in your User model
    res.status(201).json({ success: true, data: newUser });
});

// @desc Update a user
// @route PUT /api/users/:id
// @access Public
const updateUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    const updatedUser = await User.update(userId, userData); // Assuming you have a method to update a user in your User model
    res.status(200).json({ success: true, data: updatedUser });
});

// @desc Delete a user
// @route DELETE /api/users/:id
// @access Public
const deleteUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    await User.delete(userId); // Assuming you have a method to delete a user in your User model
    res.status(200).json({ success: true, message: 'User deleted successfully' });
});

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
