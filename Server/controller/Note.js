const express = require("express");
const Note = require("../model/Note");

const AddNotes = async (req, res) => {
  try {
    const { title, desc } = req.body;

    if ((!title, !desc)) {
      return res.json({ msg: "All fields are madatory", status: false });
    }

    const note = await Note.create({
      title: title,
      desc: desc,
    });

    return res.json({ status: true, note });
  } catch (err) {
    console.log("Error occured " + err);
    return res.json({ status: false, msg: err });
  }
};

const getNotes = async (req, res) => {
  try {
    const note = await Note.find();
    return res.json(note);
  } catch (error) {
    console.log("Error" + error);
  }
};

const getOneNote = async (req, res) => {
  try {
    const userId = req.params.id;
    const note = await Note.findById({ _id: userId });
    return res.json(note);
  } catch (error) {
    console.log("Error" + error);
  }
};

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const updateNote = await Note.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({ status: true, updateNote });
  } catch (err) {
    return res.json({ status: false, msg: err });
  }
};

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await Note.findByIdAndDelete({ _id: id });
    return res.json({
      status: true,
      msg: "Note deleted successfully",
      deleteNote,
    });
  } catch (error) {
    console.log("Error" + err);
  }
};
module.exports = { AddNotes, getNotes, updateNote, deleteNote, getOneNote };
