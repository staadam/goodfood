/* eslint-disable */
const { MongoClient } = require('mongodb');
const md5 = require('md5');
require('dotenv').config();

const validateUserToken = async (client, sessionToken) => {
  const options = { user: null, error: null };

  try {
    await client.connect();

    const db = client.db('goodfood');
    const users = db.collection('users');
    const data = await users.findOne({ sessionToken }, { projection: { _id: 0 } });
    if (!data) options.error = 'something went wrong';
    options.user = {
      username: data.username,
      notes: data.notes,
      userID: data.userID,
      sessionToken: data.sessionToken,
    };
  } catch (err) {
    options.error = 'something went wrong';
  }
  await client.close();

  return options;
};

exports.handler = async function (event) {
  const uri = process.env.DB_URI;
  const { sessionToken } = JSON.parse(event.body);
  const client = new MongoClient(uri, { useNewUrlParser: true });
  const options = await validateUserToken(client, sessionToken);

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
