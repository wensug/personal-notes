const router = require('express').Router();
let Note = require('../models/notes.model');

// Defined get data route
router.route('/').get((req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Defined store route
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  const date = Date.parse(req.body.date);
  const status = req.body.status;

  const newNote = new Note({
    title,
    text,
    date,
    status,
  });

  newNote.save()
  .then(() => res.json('Note added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

// Defined edit route
router.route('/:id').get((req, res) => {
  Note.findById(req.params.id)
    .then(note => res.json(note))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Defined delete route
router.route('/:id').delete((req, res) => {
  Note.findByIdAndDelete(req.params.id)
    .then(() => res.json('Note deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Defined update route
router.route('/update/:id').post((req, res) => {
  Note.findById(req.params.id)
    .then(note => {
      note.title = req.body.title;
      note.text = req.body.text;
      note.date = Date.parse(req.body.date);
      note.status = req.body.status;

      note.save()
        .then(() => res.json('Note updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;