const { MongoClient } = require('mongodb');

function createURI() {
  return `mongodb+srv://tripTracker:rogatriptracker2021@cluster0.i2n1y.mongodb.net/Cluster0?retryWrites=true&w=majority`;
}

const uri = createURI();
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function main() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    await listDatabases();
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases() {
  const dbList = await client.db().admin().listDatabases();
  console.log('Databases:');
  dbList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}

async function createPassenger(newPassenger) {
  const result = client
    .db('trip_data')
    .collection('passengers')
    .insertOne(newPassenger);
  console.log('New passenger added and given the ID: ' + result.insertedId);
}
