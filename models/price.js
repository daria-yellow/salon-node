const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const priceSchema = new Schema({
    name: { type: String, required: true },
    time: { type: Number, required: true },
    price: { type: String, required: true },
    service: { type: String, required: true },
    subservice: { type: String },
});

module.exports = mongoose.model('Price', priceSchema);