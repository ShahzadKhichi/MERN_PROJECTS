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
  changePassword,
} = require("../Controllers/ResetPassword.controller");
const { auth } = require("../Middleware/auth.middleware");

// Auth methods
router.post("/login", login);
router.post("/signup", signup);
router.post("/otp", sendOTP);
router.post("/logout", auth, logout);

// Backward compat aliases matching source route names
router.post("/sendotp", sendOTP);
router.post("/changepassword", auth, changePassword);

// Reset password
router.post("/send-token", resetPasswordTokenSender);
router.post("/reset-password-token", resetPasswordTokenSender);
router.post("/reset-password", resetPassword);

module.exports = router;
