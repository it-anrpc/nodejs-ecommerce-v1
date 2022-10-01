const express = require("express");
const {
  getCategories,
  createCategory,
} = require("../services/categoryService");
const router = express.Router();

//router.get("/", getCategories);

//router.post("/", createCategory);
router.route("/").get(getCategories).post(createCategory);

module.exports = router;
