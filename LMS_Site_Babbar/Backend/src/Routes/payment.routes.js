const router = require("express").Router();
const {
  capturePayment,
  verifyPayment,
  sendPaymentSuccessEmail,
} = require("../Controllers/Payments.controller");
const { auth, isStudent } = require("../Middleware/auth.middleware");

router.post("/capturePayment", auth, isStudent, capturePayment);
router.post("/verifyPayment", auth, isStudent, verifyPayment);
router.post(
  "/sendPaymentSuccessEmail",
  auth,
  isStudent,
  sendPaymentSuccessEmail
);

module.exports = router;
