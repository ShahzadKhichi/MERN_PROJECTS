const router = require("express").Router();
const {
  contactUsController,
} = require("../Controllers/ContactUs.controller");

router.post("/contact", contactUsController);

module.exports = router;
