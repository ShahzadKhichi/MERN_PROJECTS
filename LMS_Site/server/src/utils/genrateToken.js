const jwt = require("jsonwebtoken");

function genrateToken(res, user, msg) {
  const token = jwt.sign({ UserId: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  res
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    })
    .status(200)
    .json({
      success: true,
      message: msg,
      user,
    });
}

module.exports = genrateToken;
