require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = () => {
  let u = process.env.DB_USER;
  let p = process.env.DB_PASSWORD;
  return `mongodb+srv://${u}:${p}@trip-tracker.luvm1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
};
const client = new MongoClient(uri(), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = 'trip-tracker';

/*
async function someFunction() {
  try {
    result = await client.connect();
    console.log(result ? 'Connected to DB.' : 'DB did not connect.');
    // Do something with the database.
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
    console.log('Connection closed.');
  }
}
*/
