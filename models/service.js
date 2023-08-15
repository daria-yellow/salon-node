const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  name: { type: String, required: true },
  subservices: [{ type: { name: String, addInfo: String } }],
});

module.exports = mongoose.model("Service", serviceSchema);
