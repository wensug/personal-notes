const router = require('express').Router();
let Note = require('../models/notes.model');

// Defined GET data route
router.route('/').get(async(req, res) => {
  Note.find((err, notes) => {
    if(err){
      res.status(400).send(err)
    } else {
      res.status(200).json(notes)
    }
  });
});

// Defined POST/store route
router.route('/add').post(async (req, res) => {
  const { title, text, status } = req.body
  const date = Date.parse(req.body.date);

  const newNote = new Note({
    title,
    text,
    date,
    status,
  });
    newNote.save((err, note) => {
      if(err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(note);
      } 
    });
});

// Defined GET/edit route
router.route('/:id').get(async (req, res) => {
  Note.findById(req.params.id, (err, note) => {
    if(err) {
      res.status(400).json(err)
    }else{
      res.status(200).json(note)
    }
  }); 
});

// Defined DELETE route
router.route('/:id').delete(async(req, res) => {
  Note.findByIdAndDelete(req.params.id, (err) => {
    if(err) {
      res.status(400).json(err)
    }else {
      res.json({message: 'Note deleted.' })
    }
  });
});

// Defined PUT/update route
router.route('/update/:id').put((req, res) => {
  Note.findById({_id: req.params.id})
    .then(note => {
      note.title = req.body.title;
      note.text = req.body.text;
      note.date = Date.parse(req.body.date);
      note.status = req.body.status;

      note.save()
        .then(note => res.status(200).json(note))
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;