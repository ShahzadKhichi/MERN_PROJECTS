const router = require("express").Router();

const {
  updateProfile,
  deleteAccount,
  getAllUserDetails,
  updateProfilePicture,
} = require("../Controllers/Profile.controller");
const { auth } = require("../Middleware/auth.middleware");

router.put("/update-profile", auth, updateProfile);
router.delete("/delete-account", auth, deleteAccount);
router.get("/get-user-details", auth, getAllUserDetails);
router.put("/update-profile-picture", auth, updateProfilePicture);

module.exports = router;
