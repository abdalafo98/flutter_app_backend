const express = require("express");

const { createCategory, getCategory } = require("./../controllers/category");

const categoryModel = express.Router();

categoryModel.post("/category", createCategory);
categoryModel.get("/category", getCategory);

module.exports = categoryModel;
