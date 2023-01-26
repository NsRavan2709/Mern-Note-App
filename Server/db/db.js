const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const Note = mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected succesffuly");
  })
  .catch((err) => {
    console.log("Error" + err);
  });

module.exports = Note;
