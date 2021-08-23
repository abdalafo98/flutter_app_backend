const express = require("express");

const {
  createArticle,
  getArticles,
  getArticleById,
} = require("./../controllers/article");

const articleModel = express.Router();

articleModel.post("/article", createArticle);
articleModel.get("/article", getArticles);
articleModel.get("/article/:id", getArticleById);

module.exports = articleModel;
