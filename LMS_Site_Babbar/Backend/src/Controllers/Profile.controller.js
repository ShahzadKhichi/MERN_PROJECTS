const Profile = require("../Models/Profile.model");
const User = require("../Models/User.model");
const Course = require("../Models.");
exports.updateProfile = async (req, res) => {
  try {
    const { gender, dateOfBirth = "", contactNumber, about = "" } = req.body;
    const userId = req.user._id;

    //validation
    if (!gender || !contactNumber) {
      return res.statu(401).json({
        success: false,
        message: "gender and contact number are requried fields",
      });
    }

    const user = await User.findById({ userId })
      .populate("addtionalDetails")
      .exec();

    if (!user) {
      return res.statu(401).json({
        success: false,
        message: "unauthorized access ",
      });
    }
    //updating details
    user.additionalDetails.gender = gender;
    user.additionalDetails.about = about;
    user.additionalDetails.contactNumber = contactNumber;
    user.additionalDetails.dateOfBirth = dateOfBirth;

    await user.save();

    return res.status(200).json({
      message: "profile updated successfully",
      success: true,
      updatedUser: user,
    });
  } catch (error) {
    console.log("error in updating profile", error);
    return res.status(500).json({
      success: false,
      message: "internel server error",
    });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const userId = req.id;

    if (!userId) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    const user = await User.findById(userId);
    await Profile.findByIdAndDelete(user.additionalDetails);
    await user.deleteOne();
    return res.status(200).json({
      success: true,
      message: "Account deleted successfully",
    });
  } catch (error) {
    console.log("error in deleting accoutn", error);
    return res.status(500).json({
      success: false,
      message: "Message internel server error",
    });
  }
};

exports.getAllUserDetails = async (req, res) => {
  try {
    const userId = req.id;

    if (!userId) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized access",
      });
    }

    const user = await User.findById(userId)
      .select("-password")
      .populate("addtionalDetails")
      .exec();

    return res.status(200).json({
      success: true,
      message: "get details successfully",
      user,
    });
  } catch (error) {
    console.log("error in geting all user details", error);
    return res.status(500).json({
      success: false,
      message: "internel server error",
    });
  }
};
