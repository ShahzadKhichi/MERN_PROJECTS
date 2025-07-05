const User = require("../Models/User.Model");
const bcrypt = require("bcryptjs");
const genrateToken = require("../utils/genrateToken");
async function signUp(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
      return;
    }

    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).json({
        success: false,
        message: "User already Reqistered",
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User Registered Successful",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
      return;
    }

    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(400).json({
        success: false,
        message: "invalid Email or Password",
      });
      return;
    }

    if (!(await bcrypt.compare(password, findUser.password))) {
      return res.status(400).json({
        success: false,
        message: "invalid Email or Password",
      });
      return;
    }

    genrateTokenreturn(res, findUser, "WelCome Back to E-Learning");
    return;
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logout successfully",
    });
  } catch (error) {
    return res.staut(500).json({
      message: "Internel Server error",
      error,
    });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const userId = req.id;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized Access",
        success: false,
      });
    }

    const user = await User.findById(userId)
      .select("-password")

      .exec({ newOne: true });
    if (!user) {
      req.status(404).cookie("token", "").json({
        message: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "User data fetched",
      sucess: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internel Server error",
      error,
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.id;
    const { name } = req.body;
    const profilePhoto = req.file;

    if (!name || !profilePhoto) {
      return res.status(401).json({
        message: "All fields are required",
        success: false,
      });
    }

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized Access",
        success: false,
      });
    }

    const user = await User.findById(userId)
      .select("-password")

      .exec({ new: true });

    if (!user) {
      req.status(404).cookie("token", "").json({
        message: "User not found",
        success: false,
      });
    }

    const updatedData = { name, photoUrl };
  } catch (error) {
    return res.status(500).json({
      messgase: "internal server error",
      success: false,
      error,
    });
  }
};

module.exports = { login, signUp, logout, getUserProfile };
