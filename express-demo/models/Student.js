const mongoose = require("mongoose");

let studentSchema = mongoose.Schema({
  name: String,
  price: Number,
  tag: String
});
let Student = mongoose.model("Student", studentSchema);
module.exports = Student;