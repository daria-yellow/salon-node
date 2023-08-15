const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  position: { type: Number, required: true },
  link: { type: String, required: true },
});

module.exports = mongoose.model("Gallery", gallerySchema);
