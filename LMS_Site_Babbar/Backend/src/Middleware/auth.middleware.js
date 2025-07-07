const jwt = require("jsonwebtoken");
require("dotenv").config({});

exports.auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      req.header("Authorization").split(" ")[0] ||
      req.body.token;

    if (!token) {
      return res.status(401).json({
        sucess: false,
        message: "Unauthorized access",
      });
    }

    const decode = User.decodeTokne(token);
    if (!decode) {
      return res.status(401).json({
        sucess: false,
        message: "Unauthorized access",
      });
    }
    req.user = decode;

    next();
  } catch (error) {
    console.log("Error in auth checking", error);
    return res.status(500).json({
      success: false,
      message: "failed to verify",
    });
  }
};

exports.isStudent = async (req, res, next) => {
  try {
    const role = req.user.accountType;
    if (!role || role != "Student") {
      return res.status(401).json({
        success: false,
        message: "failed to verfy student ",
      });
    }
    next();
  } catch (error) {
    console.log("error in checking for student", error);
    return res.status(500).json({
      success: false,
      messages: "internel server error",
    });
  }
};

exports.isInstructor = async (req, res, next) => {
  try {
    const role = req.user.accountType;
    if (!role || role != "Instructor") {
      return res.status(401).json({
        success: false,
        message: "failed to verfy instructor ",
      });
    }
    next();
  } catch (error) {
    console.log("error in checking for Instructor", error);
    return res.status(500).json({
      success: false,
      messages: "internel server error",
    });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const role = req.user.accountType;
    if (!role || role != "Admin") {
      return res.status(401).json({
        success: false,
        message: "failed to verfy Admin ",
      });
    }
    next();
  } catch (error) {
    console.log("error in checking for Admin", error);
    return res.status(500).json({
      success: false,
      messages: "internel server error",
    });
  }
};
