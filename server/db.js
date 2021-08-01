// --- SETUP --- //
const { MongoClient } = require('mongodb');

function createURI() {
  return `mongodb+srv://tripTracker:rogatriptracker2021@cluster0.i2n1y.mongodb.net/Cluster0?retryWrites=true&w=majority`;
}

const uri = createURI();
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// --- END SETUP --- //

async function test() {
  try {
    await client.connect();

    const result = await findOnePassenger('name', 'betty');
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}
test().catch(console.error);

// --- LIST & CREATE --- //

/* List all the DB's in the collection. */
async function listDatabases() {
  const dbList = await client.db().admin().listDatabases();
  console.log('Databases:');
  dbList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}

/* Create a new passenger in the DB. (working) */
async function createPassenger(newPassenger) {
  // TODO - Validate new passenger object...
  const result = await client
    .db('trip_data')
    .collection('passengers')
    .insertOne(newPassenger);
  console.log('New passenger added and given the ID: ' + result.insertedId);
  return {
    id: result.insertedId.toString(),
    success: result.acknowledged || false,
  };
}

// --- WRITE --- //

/* Finds a passenger with the given field type. */
async function findOnePassenger(key, value) {
  const result = await client
    .db('trip_data')
    .collection('passengers')
    .findOne({ [key]: value });

  if (result) {
    console.log('Found.');
    return result;
  } else {
    console.log('Not found.');
    return null;
  }
}
