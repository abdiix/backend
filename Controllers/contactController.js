const asyncHandler = require('express-async-handler');

const User = require('../Models/ContactsModel');

// @desc get all contacts
// @route GET /api/contacts
// @access Public

const getContacts = asyncHandler( async (req, res) => {
    console.log('got all contacts');
    res.status(200).json({ message: "Got all contats for you" });
});


// @desc Create a contact
// @route POST /api/contacts
// @access Public

const createContact = asyncHandler (async (req, res) => {
    console.log(req.body);
        res.status(200).json({ message: "Create New contats for you" });

});

// @desc Get a contact
// @route GET /api/contacts/:id
// @access Public

const getContact = asyncHandler (async (req, res) => {
    res.status(200).json({ message: "Got Specific  contats for you" });
})

// @desc Update a contact
// @route PUT /api/contacts/:id
// @access Public

const updateContact = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Update contats for you with id ${req.params.id}` });
});

// @desc Delete a contact
// @route DELETE /api/contacts/:id
// @access Public

const deleteContact = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Delete contats for you with id ${req.params.id}` });
});


module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
}
