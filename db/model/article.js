const mongoose = require("mongoose");

const article = new mongoose.Schema({
  author: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true },
  urlToImage: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  category: { type: String, required: true },
});
module.exports = mongoose.model("Articles", article);
