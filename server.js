const express = require('express');
const errorHandler = require('./Middleware/errorHandler');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// connect to database
// const db = require('./config/db_connection');

app.use(express.json());

// Routes for contacts
app.use("/api/contacts/", require('./routes/contactsRoute'));

// Routes for users
app.use("/api/users/", require('./routes/usersRoute')); // Assuming you have a users route file

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
