/* eslint-disable */
const { MongoClient } = require('mongodb');
require('dotenv').config();

const validateCategories = async (types, clientCategory) => {
  let validation = false;
  try {
    const res = await types.find().toArray();
    const dbCategories = res.map((type) => type.category);
    validation = dbCategories.includes(clientCategory);
  } catch (error) {
    console.log('error');
  }
  return validation;
};

const getOptions = async (client, category) => {
  let options = {};

  try {
    await client.connect();

    const db = client.db('goodfood');
    const types = db.collection('types');
    const validation = await validateCategories(types, category);
    if (validation) {
      const result = await types.findOne({ category });
      options = result.options;
    }
  } finally {
    await client.close();
  }

  return options;
};

exports.handler = async function (event, context) {
  const uri = process.env.DB_URI;
  const { category } = JSON.parse(event.body);
  const client = new MongoClient(uri, { useNewUrlParser: true });
  const options = await getOptions(client, category);

  if (Object.keys(options).length === 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: `This type doesn't exist. Sorry, try again` }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ options }),
  };
};
