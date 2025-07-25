const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  dateOfBirth: {
    type: String,
  },
  about: {
    type: String,
    trim: true,
  },
  contactNumber: {
    type: Number,
    trim: true,
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);
