const express = require('express');
const db = require('../../db');
const router = express.Router();

// Get passengers route
router.get('/', (_, res) => {
  async function getResult() {
    let result = await db.findAllPassengers();
    res.send(
      result ? result : 'Unable to retrieve passengers from the database.'
    );
  }
  getResult();
});

// Add passenger route
router.post('/new', (req, res) => {
  async function getResult() {
    let result = await db.createPassenger(req.body);
    res.send(
      result ? result : 'Unable to retrieve passengers from the database.'
    );
  }
  getResult();
});

// Delete passenger route

module.exports = router;
