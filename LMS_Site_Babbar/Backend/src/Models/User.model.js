const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({});

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    accountType: {
      type: String,
      required: true,
      enum: ["Admin", "Instructor", "Student"],
    },
    active: {
      type: Boolean,
      default: true,
    },
    approved: {
      type: Boolean,
      default: true,
    },
    additionalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profile",
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    token: { type: String },
    resetPasswordExpires: { type: Date },
    image: {
      type: String,
      default: "",
    },
    courseProgress: [
      { type: mongoose.Schema.Types.ObjectId, ref: "CourseProgress" },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      id: this._id,
      email: this.email,
      accountType: this.accountType,
    },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );
  return token;
};

userSchema.statics.decodeToken = function (token) {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
