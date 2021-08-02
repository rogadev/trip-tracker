const express = require('express');
const db = require('../../db');
const router = express.Router();

// Get rides
router.get('/', (req, res) => {
  async function getResult() {
    let result = await db.findAllPassengers();
    res.send(result ? result : "Unable to retrieve passengers from the database.");
  }
  getResult();
});

// Add rides
router.post('/new', (req, res) => {
  async function getResult() {
    console.log(req);
    let result = await db.createPassenger(req.body);
    res.send(result ? result : "Unable to retrieve passengers from the database.");
  }
  getResult();
});

// Delete rides

module.exports = router;
