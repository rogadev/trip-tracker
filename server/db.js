// --- SETUP --- //
const { MongoClient } = require('mongodb');
require('dotenv').config();

function createURI() {
  return `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.i2n1y.mongodb.net/Cluster0?retryWrites=true&w=majority`;
}

const uri = createURI();
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbName = 'trip_data';
const passengers = 'passengers';

// --- END SETUP --- //

async function test() {
  try {
    await client.connect();

    const result = await findAllPassengers();
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}
//test().catch(console.error);

// --- LIST & CREATE --- //

/* List all the DB's in the collection. */
async function listDatabases() {
  const dbList = await client.db().admin().listDatabases();
  console.log('Databases:');
  dbList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}

/* Create a new passenger in the DB. */
async function createPassenger(newPassenger) {
  // todo - validate newPassenger
  let result = '';
  try {
    await client.connect();
    result = await client
      .db(dbName)
      .collection(passengers)
      .insertOne(newPassenger);
  } catch (err) {
    console.error(err);
  } finally {
    client.close();
    console.log(newPassenger);
    console.log('New passenger added and given the ID: ' + result.insertedId);
    return {
      id: result.insertedId ? result.insertedId.toString() : '',
      success: result.acknowledged || false,
    };
  }
}

// --- WRITE --- //

/* Finds a passenger with the given field type. */
async function findOnePassenger(key, value) {
  console.log(`Finding ${key}: ${value}...`);
  const result = await client
    .db(dbName)
    .collection(passengers)
    .findOne({ [key]: value });
  if (result) {
    console.log('Found.');
    return result;
  } else {
    console.log('Not found.');
    return null;
  }
}

/* Find and return all passengers. */
async function findAllPassengers() {
  let result = '';
  try {
    await client.connect();
    result = await client.db(dbName).collection(passengers).find().toArray();
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    return result;
  }
}

// --- DELETE --- //

/* Delete Passenger By ID */
async function deletePassengerById(id) {
  try {
    await client.connect();
    await client.db(dbName).collection(passengers).deleteOne({ _id: id });
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log(`Deleted passenger with ID ${id}`);
  }
}

module.exports = {
  findAllPassengers,
  findOnePassenger,
  createPassenger,
  deletePassengerById,
};
