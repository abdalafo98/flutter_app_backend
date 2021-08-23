const mongoose = require("mongoose");

const article = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date },
  dec: { type: String, required: true },
});
module.exports = mongoose.model("Articles", article);
