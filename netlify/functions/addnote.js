/* eslint-disable */
const { MongoClient } = require('mongodb');
require('dotenv').config();

const addNote = async (client, user, newUserNotes) => {
  const options = { user: null, error: null };

  try {
    await client.connect();

    const db = client.db('goodfood');
    const users = db.collection('users');
    console.log(user.userID);
    const data = await users.update({ userID: user.userID }, { $set: { notes: newUserNotes } });
  } catch (err) {
    options.error = 'something went wrong';
  }
  await client.close();

  return options;
};

exports.handler = async function (event) {
  const uri = process.env.DB_URI;
  const { user, newUserNotes } = JSON.parse(event.body);
  const client = new MongoClient(uri, { useNewUrlParser: true });
  const options = await addNote(client, user, newUserNotes);

  if (options.error) {
    return {
      statusCode: 200,
      body: JSON.stringify({ error: options.error }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(options.user),
  };
};
