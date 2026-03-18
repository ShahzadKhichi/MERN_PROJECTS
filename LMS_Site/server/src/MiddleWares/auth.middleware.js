const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized Access",
        success: false,
      });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    if (!decode) {
      return res.status(401).json({
        message: "Unauthorized Access",
        success: false,
      });
    }

    req.id = decode.UserId;

    next();
  } catch (error) {
    return res.status(500).json({
      message: "internel server error",
      error,
    });
  }
};

module.exports = { isAuthenticated };
