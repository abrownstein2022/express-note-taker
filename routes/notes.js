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

// DELETE Route for a specific note
//there is a function hanldenotedelete on line 83 in public/js/index.js
notes.delete('/api/notes/:note_id', (req, res) => {
  const noteId = req.params.note_id;
  readFromFile('./db/notes.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all notes except the one with the ID provided in the URL
      const result = json.filter((note) => note.note_id !== noteId);

      // Save that array to the filesystem
      writeToFile('./db/notes.json', result);

      // Respond to the DELETE request
      res.json(`Note ${noteId} has been deleted 🗑️`);
    });
});

// app.delete('/api/notes/:id', (req, res) => {
//   deleteNote(req.params.id, allNotes);
//   res.json(true);
// });


module.exports = notes;
