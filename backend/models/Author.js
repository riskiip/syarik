const mongoose = require("mongoose");

const Author = mongoose.model("Author", {
  name: {
    type: String,
  },
  dob: {
    type: Date,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  about: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = Author;
