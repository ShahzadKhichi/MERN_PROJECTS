const router = require("express").Router();
const {
  auth,
  isAdmin,
  isInstructor,
  isStudent,
} = require("../Middleware/auth.middleware");

// Course Controllers
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
} = require("../Controllers/Course.controller");

// Category Controllers
const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../Controllers/Category.controller");

// Section Controllers
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../Controllers/Section.controller");

// SubSection Controllers
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../Controllers/SubSection.controller");

// Rating Controllers
const {
  createRating,
  getAverageRating,
  getAllRatings,
} = require("../Controllers/RatingAndReviews.controller");

// Course Progress
const {
  updateCourseProgress,
} = require("../Controllers/CourseProgress.controller");

// ================== Course Routes ==================
router.post("/createCourse", auth, isInstructor, createCourse);
router.post("/addSection", auth, isInstructor, createSection);
router.post("/updateSection", auth, isInstructor, updateSection);
router.post("/deleteSection", auth, isInstructor, deleteSection);
router.post("/updateSubSection", auth, isInstructor, updateSubSection);
router.post("/deleteSubSection", auth, isInstructor, deleteSubSection);
router.post("/addSubSection", auth, isInstructor, createSubSection);
router.get("/getAllCourses", getAllCourses);
router.post("/getCourseDetails", getCourseDetails);
router.post("/getFullCourseDetails", auth, getFullCourseDetails);
router.post("/editCourse", auth, isInstructor, editCourse);
router.get("/getInstructorCourses", auth, isInstructor, getInstructorCourses);
router.delete("/deleteCourse", deleteCourse);
router.post("/updateCourseProgress", auth, isStudent, updateCourseProgress);

// ================== Category Routes ==================
router.post("/createCategory", auth, isAdmin, createCategory);
router.get("/showAllCategories", showAllCategories);
// backward compat alias
router.get("/getAllCategory", showAllCategories);
router.post("/getCategoryPageDetails", categoryPageDetails);

// ================== Rating and Review ==================
router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRatings);

module.exports = router;
