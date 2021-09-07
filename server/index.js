// Import dotenv
require('dotenv').config();

// Import & setup express
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

global.Route = require('./api/models/routeModel');
global.Trip = require('./api/models/tripModel');
global.User = require('./api/models/userModel');
const routes = require('./api/routes/routeRoutes');
const trips = require('./api/routes/tripRoutes');
const users = require('./api/routes/userRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

const routesApi = require('./api/routes/routeRoutes');
const tripsApi = require('./api/routes/tripRoutes');
const port = process.env.PORT || 5000;
const app = express();

// Setup Middlewares
app.use(cors());
app.use(express.json());

// API Endpoints
routes(app);
trips(app);
users(app);

// Start server
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);

module.exports = app;
