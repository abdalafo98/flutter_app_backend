const mongoose = require("mongoose");

const article = new mongoose.Schema({
  author: { type: String },
  title: { type: String },
  description: { type: String, required: true },
  urlToImage: { type: String, required: true },
  publishedAt: { type: Date },
});
module.exports = mongoose.model("Articles", article);
