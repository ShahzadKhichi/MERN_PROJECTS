const Course = require("../Models/Course.model");
const User = require("../Models/User.model");
const Tag = require("../Models/Tag.model");
const uplaodImage = require("../utils/imageUploader");

exports.createCourse = async (req, res) => {
  try {
  } catch (error) {
    console.log("error in creating course", error);
    return res.status(500).json({
      success: false,
      message: "internel server error",
    });
  }
};
