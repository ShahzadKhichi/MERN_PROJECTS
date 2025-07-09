const router = require("express").Router();
const {
  auth,
  isAdmin,
  isInstructor,
  isStudent,
} = require("../Middleware/auth.middleware");
const {
  createCourse,
  getCourseDetails,
  showAllCourses,
} = require("../Controllers/Course.controller");
const {
  createCategory,
  showAllCategories,
} = require("../Controllers/Category.controller");
const {
  createRating,
  getAllRatings,
  getAverageRating,
} = require("../Controllers/RatingAndReviews.controller");
const {
  createSection,
  deleteSection,
} = require("../Controllers/Section.controller");
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../Controllers/SubSection.controller");

// course methods

router.post("/create-course", auth, isInstructor, createCourse);
router.get("/course-details", auth, getCourseDetails);
router.get("/show-all-courses", showAllCourses);

// category methods

router.post("/create-category", auth, isAdmin, createCategory);
router.get("/getAllCategory", showAllCategories);

// rating and reviews methods

router.post("/create-rating", auth, isStudent, createRating);
router.get("/avergae-rating", getAverageRating);
router.get("/all-ratings", getAllRatings);

// sections methods

router.post("/create-section", auth, isInstructor, createSection);
router.delete("/delete-section", auth, isInstructor, deleteSection);

// subsection methods

router.post("/create-subsection", auth, isInstructor, createSubSection);
router.delete("/delete-subsection", auth, isInstructor, deleteSection);
router.put("/update-subsection", auth, isInstructor, updateSubSection);

module.exports = router;
