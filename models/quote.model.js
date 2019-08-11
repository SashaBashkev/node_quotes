const mongoose = require("mongoose");
const QuoteSchema = new mongoose.Schema({
  author: String,
  quote: String,
  created: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Quote", QuoteSchema);
