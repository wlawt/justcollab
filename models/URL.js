const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  url: {
    type: String, // Need to change to SchemaTypes.URL
    required: true
  }
});

module.exports = URL = mongoose.model("url", urlSchema);
