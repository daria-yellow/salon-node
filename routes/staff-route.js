const express = require("express");
const HttpError = require("../models/http-error");

const router = express.Router();
const Staff = require("../models/staff");

const getManagers = async (req, res, next) => {
  let staff;
  try {
    staff = await Staff.find({ type: "Manager" });
  } catch (err) {
    const error = new HttpError(
      "Fetching managers failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json(staff);
};

const getEmployees = async (req, res, next) => {
  let staff;
  try {
    staff = await Staff.find({ type: "Employee" });
  } catch (err) {
    const error = new HttpError(
      "Fetching employees failed, please try again later.",
      500
    );
    return next(error);
  }
  res.json(staff);
};

router.get("/managers", getManagers);
router.get("/employees", getEmployees);

module.exports = router;
