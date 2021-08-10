const { MongoClient } = require('mongodb');
const uri = generateURI();
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = 'trip-tracker';

function generateURI() {
  let u = 'rogatrackerapp';
  let p = 'rogatriptracker2021';
  return `mongodb+srv://${u}:${p}@trip-tracker.luvm1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
}

/* Template function. */
async function someFunction() {
  try {
    result = await client.connect();
    console.log(result ? 'Connection made.' : 'Did not connect.');
    // Do something with the database.
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log('Connection closed.');
  }
}

async function createNewUser(username, password) {
  async function checkIfUserExists(username) {
    let result = '';
    try {
      result = await client
        .db(db)
        .collection('users')
        .findOne({ user: username });
    } catch (err) {
      console.error(err);
    }
    return result;
  }
  const user = {
    user: username,
    pwd: password,
    roles: [{ role: 'readWrite', db: db }],
  };
  let outcome = { message: '', success: '' };
  try {
    await client.connect();
    let userExists = await checkIfUserExists(username);
    if (!userExists) {
      let result = await client.db(db).collection('users').insertOne(user);
      outcome.message = result.acknowledged
        ? 'User created.'
        : 'User not created.';
      outcome.success = result.acknowledged ? true : false;
    } else {
      outcome.message = 'User already exists.';
      outcome.success = false;
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
  console.log(outcome);
  return outcome;
}

//someFunction().catch(console.error);
createNewUser('test', 'test').catch(console.error);

module.exports = createNewUser;
