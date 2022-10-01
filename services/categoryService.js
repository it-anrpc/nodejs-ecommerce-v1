var slugify = require("slugify");
const CategoryModel = require("../models/categoryModel");

exports.getCategories = (req, res) => {
  const name = req.body.name;
  console.log(req.body);

  res.send();
};

exports.createCategory = (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  CategoryModel.create({ name, slug: slugify(name) })
    .then((category) => res.status(201).json({ data: category }))
    .catch((err) => res.status(400).send(err));

  /*const newCategory = new CategoryModel({ name });
  newCategory
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });*/
};
