const router = require("express").Router();

const { sendOTP, login, signup } = require("../Controllers/Auth.controller");

router.post("/login", login);
router.post("/sigup", signup);
router.get("/otp", sendOTP);
router.get("/hi", (req, res) => res.status(200).json({ hi: "hi from server" }));

module.exports = router;
