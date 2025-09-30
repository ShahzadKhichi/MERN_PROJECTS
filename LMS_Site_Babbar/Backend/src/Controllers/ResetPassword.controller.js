const User = require("../Models/User.model");

const mailSender = require("../utils/mailSender");

const crypto = require("crypto");
const bcrypt = require("bcrypt");

exports.resetPassword = async (req, res) => {
  try {
    const { confirmPassword, password, token } = req.body;
    if (!token || !confirmPassword || !password) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }

    let user = await User.findOne({ token });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid user",
      });
    }

    if (user.restTokenExpires < Date.now()) {
      return res.status(401).json({
        success: false,
        message: "expired link",
      });
    }

    user.password = password;
    user.save();

    return res.status(200).json({
      success: true,
      message: "password reset successfully",
      user,
    });
  } catch (error) {
    console.log("Error occurs during chaning password ", error);
    return res.status(500).json({
      success: false,
      message: "internel server error",
    });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(404).json({
        success: false,
        message: "All filds are requried",
      });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const check = await user.comparePassword(oldPassword);

    if (!check) {
      return res.status(401).json({
        success: false,
        message: "Invalid passowrd",
      });
    }

    user.password = newPassword;
    await user.save();
    return res.status(200).json({
      success: true,
      password: "Password updated successfuly",
    });
  } catch (error) {
    res.status(500).json({
      message: "internel server error",
      success: false,
    });
  }
};

exports.resetPasswordTokenSender = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(401).json({
        success: false,
        message: "All fields are requried",
      });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email ",
      });
    }
    const token = crypto.randomUUID().toString();
    user = await user.updateOne(
      {
        token,
        restTokenExpires: Date.now() + 10 * 60 * 1000,
      },
      { new: true }
    );

    const url = `http://localhost:5000/update-password/${token}`;

    await mailSender(
      email,
      "Password Reset Link",
      `Password Reset Link : ${url}`
    );

    return res.status(200).json({
      success: true,
      message: "Link sent successfully",
    });
  } catch (error) {
    console.log("error occurs in sending reset password token", error);
    return res.status(500).json({
      success: false,
      message: "internel server error",
    });
  }
};
