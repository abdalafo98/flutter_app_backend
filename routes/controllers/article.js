const article = require("./../../db/model/article");

const createArticle = (req, res) => {
  const { author, title, description, urlToImage, publishedAt } = req.body;

  const newArticle = new article({
    author,
    title,
    description,
    urlToImage,
    publishedAt,
  });

  newArticle
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).send("cannot create");
    });
};

const getArticles = (req, res) => {
  article
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send("cannot get");
    });
};

const getArticleById = (req, res) => {
  const id = req.params.id;

  article
    .find({ _id: id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send("cannot get");
    });
};

const getArticlesByCategory = (req, res) => {
  const category = req.params.category;

  article
    .find({ category: category })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send("cannot get");
    });
};

module.exports = {
  createArticle,
  getArticles,
  getArticleById,
  getArticlesByCategory,
};
