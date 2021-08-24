const categoryModel = require("./../../db/model/category");

const createCategory = (req, res) => {
  const { name } = req.body;

  const category = new categoryModel({
    name,
  });

  category
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).send("cannot create");
    });
};

const getCategory = (req, res) => {
  categoryModel
    .find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).send("cannot get");
    });
};

module.exports = {
  createCategory,
  getCategory,
};
