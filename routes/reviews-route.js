const express = require("express");
const HttpError = require("../models/http-error");

const router = express.Router();
const Review = require('../models/review');

const getReviews = async (req, res, next) => {
  let reviews;
  try {
    reviews = await Review.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching reviews failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json(reviews);
};

router.get("/", getReviews);

module.exports = router;
