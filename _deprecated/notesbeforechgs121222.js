const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
//look for helper code
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

//html routes
// GET Route for retrieving notes information
notes.get('/notes', (req, res) =>
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)))
);



// POST Route for a error logging
notes.post('/', (req, res) => {
  console.log('POST >> api/notes/', req.body);

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
    console.log('New note addeed:', payload)
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
notes.delete('/:note_id', (req, res) => {
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

// POST Route for a new note
notes.post('/', (req, res) => {
  console.log(req.body);

  const { text, title } = req.body;

  if (req.body) {
    const newNote = {
      text,
      title,
      id: uuidv4(),
    };

    readAndAppend(newNote, './db/notes.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

//! Most real-world APIs use get and post routes with strictly defined route names that explain what they do (some clients cant use delete / update requests)
// notes.post('api/notes/delete-note-by-id/:id')


module.exports = notes;
