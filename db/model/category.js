const mongoose = require("mongoose");

const category = new mongoose.Schema({
  name: { type: String, require: true },
});

module.exports = mongoose.model("Category", category);
