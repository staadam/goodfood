/* eslint-disable */
const { MongoClient } = require('mongodb');
const md5 = require('md5');
require('dotenv').config();

const validateUserCredentials = async (client, credentials) => {
  const options = { user: null, error: null };

  try {
    await client.connect();

    const db = client.db('goodfood');
    const users = db.collection('users');
    const data = await users.findOne({ username: credentials.login }, { projection: { _id: 0 } });

    if (data && data.password === md5(credentials.password))
      options.user = {
        username: data.username,
        notes: data.notes,
        userID: data.userID,
        favs: data.favs,
        sessionToken: data.sessionToken,
      };
    else options.error = 'wrong credentials';
  } catch (err) {
    options.error = 'something went wrong';
  }
  await client.close();

  return options;
};

exports.handler = async function (event) {
  const uri = process.env.DB_URI;
  const { login, password } = JSON.parse(event.body);
  const client = new MongoClient(uri, { useNewUrlParser: true });
  const options = await validateUserCredentials(client, { login, password });

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
