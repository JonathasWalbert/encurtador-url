const mongoose = require("mongoose");

const shortUrlSchema = new mongoose.Schema({
  targetURL: {type: String, required: true},
  shortID: {type: String, required: true}
});

const ShortUrl = module.exports = mongoose.model("ShortURLS", shortUrlSchema);