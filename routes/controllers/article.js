const article = require("./../../db/model/article");

const createArticle = (req, res) => {
  const { name, dec } = req.body;
  const newArticle = new article({ name, dec });

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

module.exports = {
  createArticle,
  getArticles,
  getArticleById,
};