/* eslint-disable */
const { MongoClient } = require('mongodb');
require('dotenv').config();

const getOptions = async (client, category) => {
  const options = { data: null, error: null };

  try {
    await client.connect();

    const db = client.db('goodfood');
    const types = db.collection('types');
    options.data = await types.findOne({ category }, { projection: { _id: 0, category: 0 } });
  } catch (err) {
    options.error = err;
  }
  await client.close();

  return options;
};

exports.handler = async function (event, context) {
  const uri = process.env.DB_URI;
  const { category } = JSON.parse(event.body);
  const client = new MongoClient(uri, { useNewUrlParser: true });
  const options = await getOptions(client, category);
  if (options.error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: `This type doesn't exist. Sorry, try again` }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(options.data.options),
  };
};
