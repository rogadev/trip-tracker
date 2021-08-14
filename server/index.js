// Import dotenv
require('dotenv').config();

// Import & setup express
const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;
const domain = process.env.DOMAIN || 'localhost';
const api = require('./api/routes');

// Setup Middlewares
app.use(cors());
app.use(express.json());

// API Endpoints
app.use('/api', api);

// Start server
app.listen(port, domain, () => {
  `Server running on port ${port}`;
});
