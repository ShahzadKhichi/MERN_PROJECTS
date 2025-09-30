const router = require("express").Router();

const {
  sendOTP,
  login,
  signup,
  logout,
} = require("../Controllers/Auth.controller");
const {
  resetPasswordTokenSender,
  resetPassword,
} = require("../Controllers/ResetPassword.controller");
const { auth } = require("../Middleware/auth.middleware");

// auth methods
router.post("/login", login);
router.post("/signup", signup);
router.post("/otp", sendOTP);
router.post("/logout", auth, logout);

// reset password
router.post("/send-token", resetPasswordTokenSender);
router.post("/reset-password", resetPassword);

module.exports = router;
