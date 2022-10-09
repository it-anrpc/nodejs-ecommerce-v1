var slugify = require("slugify");
const CategoryModel = require("../models/categoryModel");
const asyncHandler = require("express-async-handler");

//@ desc  Get List Categories
//@route  GET /api/v1/categories
//@access Public
exports.getCategories = asyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  const categories = await CategoryModel.find({}).limit(limit).skip(skip);
  res
    .status(200)
    .json({ result: categories.length, page: page, data: categories });
});

/*exports.getCategories = (req, res) => {
  CategoryModel.find({})
    .then((categories) => {
      res.status(200).json({ resultttt: categories.length, data: categories });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};*/

//@ desc  Create Category
//@route  POST /api/v1/categories
//@access Private
exports.createCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const category = await CategoryModel.create({ name, slug: slugify(name) });
  res.status(201).json({ data: category });

  /*CategoryModel.create({ name, slug: slugify(name) })
    .then((category) => res.status(201).json({ data: category }))
    .catch((err) => res.status(400).send(err));*/

  /*const newCategory = new CategoryModel({ name });
  newCategory
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });*/
});
