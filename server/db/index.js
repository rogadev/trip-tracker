const {
  client,
  /*async*/ openConnection,
  /*async*/ closeConnection,
} = require('./setup');

async function testConnection() {
  let result;
  try {
    console.log('Opening Connection...');
    result = await openConnection();
    console.log(result ? 'Connected.' : 'Issue Connecting.');
    console.log(result ? 'Test Succeeded.' : 'Test Failed.');
  } catch (e) {
    console.error(e);
  } finally {
    console.log('Closing Connection...');
    await closeConnection();
    console.log('Closed.');
  }
}

module.exports = {
  testConnection,
};
