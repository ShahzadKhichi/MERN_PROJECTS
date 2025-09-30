const router = require("express").Router();

const {
  updateProfile,
  deleteAccount,
  getAllUserDetails,
  updateProfilePicture,
  getUserEnrolledCourses,
} = require("../Controllers/Profile.controller");
const { changePassword } = require("../Controllers/ResetPassword.controller");
const { auth } = require("../Middleware/auth.middleware");

router.put("/update-profile", auth, updateProfile);
router.delete("/delete-account", auth, deleteAccount);
router.get("/get-user-details", auth, getAllUserDetails);
router.put("/update-profile-picture", auth, updateProfilePicture);
router.put("/update-password", auth, changePassword);
router.get("/enrolled-courses", auth, getUserEnrolledCourses);

module.exports = router;
