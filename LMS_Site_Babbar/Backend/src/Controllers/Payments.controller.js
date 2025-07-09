const User = require("../Models/User.model");
const Course = require("../Models/Course.model");

exports.capturePayment = async (req, res) => {
  try {
  } catch (error) {
    console.log("error in creating order", error);
  }
};

exports.verifySignature = async (req, res) => {
  try {
  } catch (error) {
    console.log("error in verifying singature", error);
    return res.status(500).json({
      success: false,
      message: "internel server error",
    });
  }
};
