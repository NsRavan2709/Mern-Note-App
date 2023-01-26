const express = require("express");
const {
  AddNotes,
  getNotes,
  updateNote,
  deleteNote,
  getOneNote,
} = require("../controller/Note");

const router = express.Router();

router.post("/", AddNotes);
router.get("/", getNotes);
router.put("/updateNote/:id", updateNote);
router.delete("/deleteNote/:id", deleteNote);
router.get("/getNote/:id", getOneNote);
module.exports = router;
