const express = require('express');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');
const router = express.Router();

const uri =
  'mongodb+srv://tripTracker:rogatriptracker2021@cluster0.i2n1y.mongodb.net/Cluster0?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  UseNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = client.db('user');

async function connect() {
  await client.connect();
}
async function disconnect() {
  await client.close();
}
function log(message) {
  console.log(message);
}
function err(message) {
  console.error(message);
}
async function run(task) {
  try {
    connect();
    const result = await task;
    log(result);
  } catch (err) {
    err(err);
  } finally {
    disconnect();
  }
}

async function createNewUser(user) {
  const userWithRoles = {
    ...user,
    roles: [{ role: 'readWrite', db: 'Cluster0' }],
  };
  const result = await db.createUser(userWithRoles);
  return result;
}

router.post('/', (req, res) => {
  const user = {
    user: req.body.username,
    pwd: req.body.password,
  };
  async function createNewUser() {
    return await db.createNewUser(user);
  }
  createNewUser();
});

module.exports = router;
