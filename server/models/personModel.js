const mongoose = require("mongoose");
const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  project: {
    type: String,
    enum: ["Submitted", "Processed", "Accepted", "Rejected"],
    default: "Submitted",
  },
});
module.exports = mongoose.model("person", personSchema);
