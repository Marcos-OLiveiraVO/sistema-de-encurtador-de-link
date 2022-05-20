const mongoose = require("mongoose");

const URL = mongoose.Schema({
  original_url: { type: String, required: true },
  hash: { type: String },
  newUrl: { type: String },
  creatAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("UrlSchema", URL);
