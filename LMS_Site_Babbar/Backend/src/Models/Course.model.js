const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: { type: String, trim: true, required: true },
    courseDescription: { type: String, trim: true, required: true },
    whatYouWillLearn: { type: String, trim: true },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
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
    thumbnail: { type: String },
    tag: { type: [String] },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    studentsEnroled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    instructions: { type: [String] },
    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", courseSchema);
