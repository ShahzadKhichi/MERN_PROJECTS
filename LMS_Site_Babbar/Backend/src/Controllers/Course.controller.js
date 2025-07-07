const Course = require("../Models/Course.model");
const User = require("../Models/User.model");
const Tag = require("../Models/Tag.model");
const uplaodImage = require("../utils/imageUploader");

exports.createCourse = async (req, res) => {
  try {
    const userId = req.user._id;
    //geting data
    const { courseName, courseDescription, whatYouWillLearn, price, tag } =
      req.body;

    const { thumbnail } = req.files;

    //validating data
    if (
      !courseName ||
      !courseDescription ||
      !whatYouWillLearn ||
      !price ||
      !tag ||
      !thumbnail
    ) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }

    let instructor = await User.findById(userId);

    if (!instructor) {
      return res.status(401).json({
        success: false,
        message: "Invalid Instructor",
      });
    }

    const tagDetails = await Tag.findOne({ name: tag });
    if (!tagDetails) {
      return res.status(401).json({
        success: false,
        message: "Invalid Tag Name",
      });
    }

    //uplaoding image to cloudinary

    const thumbnailUrl = await uplaodImage(thumbnail, process.env.FOLDER)
      .secure_url;

    //create a new entry for new course

    const course = await Course.create({
      courseName,
      courseDescription,
      thumbnail: thumbnailUrl,
      instructor: instructor._id,
      price,
      whatYouWillLearn,
      tag: tagDetails._id,
    });

    instructor = await instructor.updateOne(
      {
        $push: {
          courses: course._id,
        },
      },
      { new: true }
    );
    await instructor.save();

    return res.statu(201).json({
      success: true,
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    console.log("error in creating course", error);
    return res.status(500).json({
      success: false,
      message: "internel server error",
    });
  }
};

exports.showAllCourses = async (req, res) => {
  try {
    const Courses = await Course.find({}).populate("instructor").exec();

    return res.status(200).json({
      Courses,
      success: true,
      message: "Courses get successfully",
    });
  } catch (error) {
    console.log("error in creating Course", error);

    return res.status(500).json({
      success: false,
      messsage: "internel server error",
    });
  }
};
