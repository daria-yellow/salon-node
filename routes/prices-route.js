const express = require("express");
const HttpError = require("../models/http-error");

const router = express.Router();
const Price = require('../models/price');

const getPrices = async (req, res, next) => {
  let prices;
  try {
    prices = await Price.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching prices failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json(prices);
};

router.get("/", getPrices);

module.exports = router;
