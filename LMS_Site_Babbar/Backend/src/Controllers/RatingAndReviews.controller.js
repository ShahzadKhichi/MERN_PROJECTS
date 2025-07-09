const User = require("../Models/User.model");
const Course = require("../Models/Course.model");
const RAR = require("../Models/RatingAndReview.model");

exports.createRating = async (req, res) => {
  try {
    const { courseId, rating, review } = req.body;
    const userId = req.id;

    if (!userId || !courseId) {
      return res.status(400).json({
        message: "all fields are requried",
        success: false,
      });
    }

    const course = await Course.findById(courseId).populate("ratingAndReviews");

    if (course.studentsEnRolled.includes(userId) == -1) {
      return res.status(400).json({
        message: "not enrolled in course",
        success: false,
      });
    }

    if (
      course.ratingAndReviews.filter((rating) => rating.user == userId).length >
      0
    ) {
      return res.status(400).json({
        message: "already reviewed the course",
        success: false,
      });
    }

    const rar = await RAR.create({
      user: userId,
      course: course._id,
      rating,
      review,
    });

    await course.updateOne({
      $push: {
        ratingAndReviews: rar._id,
      },
    });

    return res.status(201).json({
      success: true,
      message: "rating and review added successfully",
      ratingReview: rar,
    });
  } catch (error) {
    console.log("error in creating rating ", error);
    return res.status(500).json({
      success: false,
      message: "internel server error",
    });
  }
};

exports.getAverageRating = async (req, res) => {
  try {
    const { courseId } = req.body;

    if (!courseId) {
      return res.status(400).json({
        success: false,
        message: "all fields are requried",
      });
    }

    const course = await Course.findById(courseId)
      .populate("ratingAndReviews")
      .exec();

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "course not found",
      });
    }

    let rating = 0;

    if (course.ratingAndReviews.length > 0) {
      rating = course.ratingAndReviews.reduce((acc, val) => (acc += val), 0);
      rating /= course.ratingAndReviews.length;
    }

    return res.status(200).json({
      success: true,
      message: "get average rating successfully",
      averageRating: rating.toFixed(1),
    });
  } catch (error) {
    console.log("error in geting average  rating ", error);
    return res.status(500).json({
      success: false,
      message: "internel server error",
    });
  }
};

exports.getAllRatings = async (req, res) => {
  try {
    const allRatings = await RAR.find({})
      .populate({
        path: "user",
        select: "firstName lastName email imageUrl",
      })
      .populate({
        path: "course",
        select: "courseName",
      })
      .exec();

    return res.status(200).json({
      success: true,
      message: "get all ratings successfully",
      ratingsReviews: allRatings,
    });
  } catch (error) {
    console.log("error in geting all rating ", error);
    return res.status(500).json({
      success: false,
      message: "internel server error",
    });
  }
};
