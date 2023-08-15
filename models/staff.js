const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const staffSchema = new Schema({
  photo: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: String, required: true },
  position: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true }, // "Employee" or "Manager"
});

module.exports = mongoose.model("Staff", staffSchema);
