/* eslint-disable */
const { MongoClient } = require('mongodb');
require('dotenv').config();

const changeDB = async (client, user, newFavs) => {
  const options = { message: null, error: null };

  try {
    await client.connect();
    const db = client.db('goodfood');
    const users = db.collection('users');
    await users.update({ userID: user.userID }, { $set: { favs: newFavs } });
    options.message = 'success';
  } catch (err) {
    options.error = 'something went wrong';
  }
  await client.close();
  return options;
};

exports.handler = async function (event) {
  const uri = process.env.DB_URI;
  const data = JSON.parse(event.body);
  const client = new MongoClient(uri, { useNewUrlParser: true });
  let options = await changeDB(client, data.user, data.newFavs);

  if (options.error) {
    return {
      statusCode: 200,
      body: JSON.stringify({ error: options.error }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: options.message }),
  };
};
