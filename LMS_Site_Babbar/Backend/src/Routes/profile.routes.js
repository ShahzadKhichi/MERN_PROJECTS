const router = require("express").Router();
const { auth, isInstructor } = require("../Middleware/auth.middleware");
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateProfilePicture,
  getUserEnrolledCourses,
  instructorDashboard,
} = require("../Controllers/Profile.controller");
const { changePassword } = require("../Controllers/ResetPassword.controller");

router.delete("/deleteProfile", auth, deleteAccount);
router.put("/updateProfile", auth, updateProfile);
router.get("/getUserDetails", auth, getAllUserDetails);
router.get("/getEnrolledCourses", auth, getUserEnrolledCourses);
router.put("/updateDisplayPicture", auth, updateProfilePicture);
router.get("/instructorDashboard", auth, isInstructor, instructorDashboard);

// backward compat aliases
router.put("/update-profile", auth, updateProfile);
router.delete("/delete-account", auth, deleteAccount);
router.get("/get-user-details", auth, getAllUserDetails);
router.put("/update-profile-picture", auth, updateProfilePicture);
router.put("/update-password", auth, changePassword);
router.get("/enrolled-courses", auth, getUserEnrolledCourses);

module.exports = router;
