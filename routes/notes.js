const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
//look for helper code
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving notes information
notes.get('/', (req, res) => {
  readFromFile('./db/notes.json').then((data) =>
    res.json(JSON.parse(data))
  );
});

// POST Route for a error logging
notes.post('/', (req, res) => {
  console.log(req.body);

  //destructuring of notes data
  const { title, text } = req.body;

  const payload = {
    title,
    id: uuidv4(),  //gets the id
    text,
  };

  //if title is empty
  if (!title) {
    readAndAppend(payload, './db/notes.json');
    res.json(`Notes information added`);
  } else {
    res.json({
      message: 'Object is valid, not logging. Check front end implementation',
      id: payload.id,
    });
  }
});

module.exports = notes;
