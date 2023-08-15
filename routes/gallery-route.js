const express = require("express");
const HttpError = require("../models/http-error");

const router = express.Router();
const Gallery = require('../models/gallery');

const getGallery = async (req, res, next) => {
  let gallery;
  try {
    gallery = await Gallery.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching gallery failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json(gallery.sort((a, b) => a.position - b.position));
};

router.get("/", getGallery);

module.exports = router;
