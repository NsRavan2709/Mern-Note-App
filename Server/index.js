const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const router = require("./routes/note");
require("./db/db");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/notes", router);

app.listen(8800, () => {
  console.log("Success");
});
