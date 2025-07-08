const Section = require("../Models/Section.model");
const Course = require("../Models/Course.model");

exports.createSection = async (req, res) => {
  try {
    const { sectionName, courseId } = req.body;
    if (!sectionName || !courseId) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }
    let course = await Course.findById(courseId);
    if (!course) {
      return res.status(401).json({
        success: false,
        message: "Invalid Course id",
      });
    }
    //creating section
    const section = await Section.create({
      sectionName,
      course: course._id,
    });
    //update course
    course = await course
      .updateOne(
        {
          $push: {
            courseContent: section._id,
          },
        },
        { new: true }
      )
      .populate("courseContent")
      .exec();
    course = await course.save();

    return res.status(201).json({
      success: true,
      message: "New section created Successfully",
      updatedCourse: course,
    });
  } catch (error) {
    console.log("error in creating section ", error);
    return res.status(500).json({
      success: false,
      message: "internel server error",
    });
  }
};

exports.deleteSection = async (req, res) => {
  try {
    const { sectionId } = req.body;

    if (!sectionId) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }

    await Section.findByIdAndDelete(sectionId);
    return res.status(200).json({
      message: "section deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log("error in deleting section", error);
    return res.status(500).json({
      message: "internel server error",
      success: false,
    });
  }
};
