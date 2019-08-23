const router = require('express').Router();
let Note = require('../models/notes.model');

router.route('/').get((req, res) => {
  Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  const status = req.body.status;
  const created = Date.parse(req.body.created);

  const newNote = new Note({
    title,
    text,
    status,
    created,
  });

  newNote.save()
  .then(() => res.json('Note added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;