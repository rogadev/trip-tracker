require('dotenv').config();

const { MongoClient } = require('mongodb');

const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function openConnection() {
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
}

async function closeConnection() {
  try {
    await client.close();
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
}

module.exports = {
  client,
  openConnection,
  closeConnection,
};
