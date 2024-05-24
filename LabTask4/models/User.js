const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  email: String,
  password: String,
  roles: [],
});

let User = mongoose.model("User", userSchema);
module.exports =  User;

