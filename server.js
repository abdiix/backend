const express = require('express');
const errorHandler = require('./Middleware/errorHandler');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;


// connect to contact database mysql
const db = require('./config/db_connection');

app.use (express.json());
app.use("/api/contacts/", require('./routes/contacts'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});