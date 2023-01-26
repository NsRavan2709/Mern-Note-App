const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const NoteModel = mongoose.model("Notes", NoteSchema);

module.exports = NoteModel;
