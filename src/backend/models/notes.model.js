const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: { 
    type: String 
  },
  text: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  status: { 
      type: String, 
      enum: ['unarchive', 'archieve'],
      default: 'unarchive'
  }
});

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note; 