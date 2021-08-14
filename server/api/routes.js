const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('/test', (_, res) => {
  async function run() {
    await db.testConnection();
  }
  let result = run();
  res.json(result ? result : 'Problem occured.');
});

module.exports = router;
