const express = require("express");
const HttpError = require("../models/http-error");

const router = express.Router();
const Product = require('../models/product');

const getProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching products failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json(products);
};

router.get("/", getProducts);

module.exports = router;
