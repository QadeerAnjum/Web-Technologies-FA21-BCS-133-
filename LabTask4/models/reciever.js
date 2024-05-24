const mongoose = require("mongoose");

let recieverSchema = mongoose.Schema({
  bloodGroup: String,
  name: String,
  contactNumber:Number,
  address: String
});
let Reciever = mongoose.model("Reciever", recieverSchema);
module.exports = Reciever;