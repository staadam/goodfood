/* eslint-disable */
const { MongoClient } = require('mongodb');
require('dotenv').config();

const addNote = async (client, user, newUserNotes) => {
  return await changeDB(client, user, newUserNotes);
};

const removeNote = async (client, noteText, id, user) => {
  const mealNotes = user.notes.find((note) => note.mealID === id);
  const newMealNotes = mealNotes.notes.filter((noteContent) => noteContent !== noteText);

  const newUserNotes = [
    ...user.notes.filter((note) => note.mealID !== id),
    { mealID: id, notes: newMealNotes },
  ];

  return await changeDB(client, user, newUserNotes);
};

const changeDB = async (client, user, newUserNotes) => {
  const options = { message: null, error: null };

  try {
    await client.connect();
    const db = client.db('goodfood');
    const users = db.collection('users');
    await users.update({ userID: user.userID }, { $set: { notes: newUserNotes } });
    options.message = 'success';
  } catch (err) {
    options.error = 'something went wrong';
  }
  await client.close();
  return options;
};

exports.handler = async function (event) {
  const uri = process.env.DB_URI;
  const { action, data } = JSON.parse(event.body);
  const client = new MongoClient(uri, { useNewUrlParser: true });
  let options = {};

  switch (action) {
    case 'addNote':
      options = await addNote(client, data.user, data.newUserNotes);
      break;
    case 'removeNote':
      options = await removeNote(client, data.noteText, data.id, data.user);
      break;
    default:
      break;
  }

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
