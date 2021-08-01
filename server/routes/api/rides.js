const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

// Get rides
router.get('/', (req, res) => {
  res.send('Rides to display here...');
});

// Add rides
router.post('/', (req, res) => {});

// Delete rides

module.exports = router;
