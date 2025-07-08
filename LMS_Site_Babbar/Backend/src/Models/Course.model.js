const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      trim: true,
      required: true,
    },
    courseDescription: {
      type: String,
      trim: true,
      required: true,
    },
    WhatYouWillLearn: {
      type: String,
      trim: true,
      required: true,
    },
    instrutor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    courseContent: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
      },
    ],
    ratingAndReviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "RatingAndReview",
      },
    ],
    price: { type: Number, required: true },
    thumnail: {
      types: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    tags: {
      types: String,
    },
    studentsEnRolled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
