const express = require("express");

const {
  createArticle,
  getArticles,
  getArticleById,
  getArticlesByCategory,
} = require("./../controllers/article");

const articleModel = express.Router();

articleModel.post("/article", createArticle);
articleModel.get("/article", getArticles);
articleModel.get("/article/:id", getArticleById);
articleModel.get("/article/:category", getArticlesByCategory);

module.exports = articleModel;
