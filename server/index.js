// Import dotenv
require('dotenv').config();

// Import & setup express
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const domain = 'localhost';
const api = require('./api');

// Setup Middlewares
app.use(cors());
app.use(express.json());

// API Endpoints
app.use('/api', api);

// Start server
app.listen(port, domain, () => {
  console.log(`Server running on ${domain}, port ${port}`);
});

module.exports = app;
