const User = require("../Models/User.model");
const OTP = require("../Models/OTP.model");
const otpGenerator = require("otp-generator");
const Profile = require("../Models/Profile.model");

exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(401).json({
        success: false,
        message: "all fields are required",
      });
    }
    const alreadyUser = await User.findOne({ email });

    if (alreadyUser) {
      return res.status(401).json({
        success: false,
        message: "Please use a uniuqe email",
      });
    }

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    const otpPayLoad = { email, otp };
    const otpBody = await OTP.create(otpPayLoad);

    return res.status(201).json({
      success: true,
      messae: "OTP sent successfulyy",
    });
  } catch (error) {
    console.log("Error in sending otp", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ((!email, !password)) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid Email or Password",
        success: false,
      });
    }

    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return res.status(401).json({
        message: "Invalid Email or Password",
        success: false,
      });
    }

    const token = user.generateToken();

    res.cookie("token", token);
    res.status(200).json({
      message: "login successfull",
      success: true,
      user,
      token,
    });
  } catch (error) {
    console.log("Error Occurs during login", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      otp,
    } = req.body;
    //validating all fields
    if (
      !email ||
      !firstName ||
      !lastName ||
      !password ||
      !confirmPassword ||
      !accountType ||
      !otp
    ) {
      return res.status(401).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!otp || otp?.length < 6) {
      return res.status(401).json({
        success: false,
        message: " Invalid otp",
      });
    }

    if (password != confirmPassword) {
      return res.status(401).json({
        success: false,
        message: "Password and confirm password are different",
      });
    }
    //checking already register user
    const alreadyExistUser = await User.findOne({ email });
    if (alreadyExistUser) {
      return res.status(401).json({
        success: false,
        message: "Please use a unique email id",
      });
    }

    const recentOTP = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);

    if (!recentOTP || recentOTP[0]?.otp?.length < 6) {
      return res.status(401).json({
        success: false,
        message: "Verification failed",
      });
    } else if (recentOTP[0].otp != otp) {
      return res.status(401).json({
        success: false,
        message: "Invalid OTP, verification failed",
      });
    }

    const imageUrl = `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`;
    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
    });
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      accountType,
      imageUrl,
      additionalDetails: profileDetails._id,
    });

    const token = user.generateToken();

    res.cookie("token", token);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
      token,
    });
  } catch (error) {
    console.log("Error occurs during sign in ", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      success: true,
      message: "logout  successfull",
    });
  } catch (error) {
    console.log("error in loging out", error);

    return res.status(500).json({
      success: false,
      message: "failed to logout",
    });
  }
};
