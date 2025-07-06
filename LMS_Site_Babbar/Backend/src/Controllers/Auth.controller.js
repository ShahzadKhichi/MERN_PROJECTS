const User = require("..//Models/user.model");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ((!email, password)) {
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

    res.cookies("token", token).status(200).json({
      message: "login successfull",
      success: true,
      user,
    });
  } catch (error) {
    console.log("Error Occurs during login", error);
  }
};

exports.signup = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error occurs during sign in ", error);
  }
};
