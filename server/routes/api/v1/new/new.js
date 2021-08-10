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

router.post('/', (req, res) => {
  let result = '';
  result = createNewUser(req.body.username, req.body.password);
  res.send(result);
});

async function createNewUser(username, password) {
  try {
    await connect();
    async function createNewUserWithEmailPwd(email, password) {
      const user = {
        email,
        password,
      };
      const result = await db.collection('users').insertOne(user);
      if (result.result.ok) {
        return result.insertedId;
      }
      return null;
    }
    result = createNewUserWithEmailPwd(username, password);
  } catch (e) {
    err(e);
  } finally {
    await disconnect();
  }
}

module.exports = router;
