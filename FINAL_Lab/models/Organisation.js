const mongoose = require("mongoose");

let organisationSchema = mongoose.Schema({
  number: Number,
  name: String,
  desc: String
});
let Organisation = mongoose.model("Organisation", organisationSchema);
module.exports = Organisation;