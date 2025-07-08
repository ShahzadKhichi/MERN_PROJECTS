const Course = require("../Models/Course.model");
const User = require("../Models/User.model");
const Category = require("../Models/Category.model");
const uplaodImage = require("../utils/imageUploader");

exports.createCourse = async (req, res) => {
  try {
    const userId = req.user._id;
    //geting data
    const {
      courseName,
      courseDescription,
      whatYouWillLearn,
      price,
      category,
      tags,
    } = req.body;

    const { thumbnail } = req.files;

    //validating data
    if (
      !courseName ||
      !courseDescription ||
      !whatYouWillLearn ||
      !price ||
      !category ||
      !thumbnail ||
      !tags
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

    const categoryDetails = await Category.findOne({ name: category });
    if (!categoryDetails) {
      return res.status(401).json({
        success: false,
        message: "Invalid category Name",
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
      category: categoryDetails._id,
      tags,
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
