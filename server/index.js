// Import dotenv
require('dotenv').config();
// Import & setup express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const domain = process.env.DOMAIN || 'localhost';
const api = require('./api');
// Import cors
const cors = require('cors');
// Setup Middlewares
app.use(cors());
app.use(express.json());
// Start server
app.listen(port, domain, () => {
  `Server running on port ${port}`;
});
// API Endpoints
app.use('/api', api);
