const express = require("express");
const HttpError = require("../models/http-error");

const router = express.Router();
const Service = require('../models/service');

const getServices = async (req, res, next) => {
  let services;
  try {
    services = await Service.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching services failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json(services);
};


router.get("/", getServices);

module.exports = router;
