const mongoose = require("mongoose");

const courseProgressSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  completedVideos: [
    { types: mongoose.Schema.Types.ObjectId, ref: "SubSection" },
  ],
});

module.exports = mongoose.model("CourseProgress", courseProgressSchema);
