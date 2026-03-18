const router = require("express").Router();

const {
  login,
  signUp,
  logout,
  getUserProfile,
} = require("../Controllers/user.controller");
const { isAuthenticated } = require("../MiddleWares/auth.middleware");

router.post("/signup", signUp);
router.post("/login", login);
router.get("/logout");
router.get("/profile", isAuthenticated, getUserProfile);

module.exports = router;
