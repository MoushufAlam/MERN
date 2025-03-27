const mongoose = require("mongoose");

const ProductSchemas = new mongoose.Schema({
  name: String,
  Brand: String,
  Price: Number,
  category: String,
});

module.exports = mongoose.model("products", ProductSchemas);