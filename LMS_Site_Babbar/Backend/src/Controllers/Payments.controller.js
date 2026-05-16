const stripe = require("../Config/stripe");
const Course = require("../Models/Course.model");
const User = require("../Models/User.model");
const mailSender = require("../utils/mailSender");
const mongoose = require("mongoose");
const {
  courseEnrollmentEmail,
} = require("../templates/courseEnrollemntEmail");
const {
  paymentSuccessEmail,
} = require("../templates/paymentSuccessfull");
const CourseProgress = require("../Models/CourseProgress.model");

// Create Stripe Checkout Session
exports.capturePayment = async (req, res) => {
  const { courses } = req.body;
  const userId = req.user.id;

  if (!courses || courses.length === 0) {
    return res.json({ success: false, message: "Please Provide Course ID" });
  }

  let total_amount = 0;
  let courseDetails = [];

  for (const course_id of courses) {
    try {
      const course = await Course.findById(course_id);
      if (!course) {
        return res
          .status(404)
          .json({ success: false, message: "Could not find the Course" });
      }

      const uid = new mongoose.Types.ObjectId(userId);
      if (course.studentsEnroled.includes(uid)) {
        return res
          .status(200)
          .json({ success: false, message: "Student is already Enrolled" });
      }

      total_amount += course.price;
      courseDetails.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: course.courseName,
            description: course.courseDescription || "Course enrollment",
            images: course.thumbnail ? [course.thumbnail] : [],
          },
          unit_amount: Math.round(course.price * 100), // Stripe expects amount in cents
        },
        quantity: 1,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: courseDetails,
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL || "http://localhost:5173"}/payment-success?session_id={CHECKOUT_SESSION_ID}&courses=${encodeURIComponent(JSON.stringify(courses))}`,
      cancel_url: `${process.env.FRONTEND_URL || "http://localhost:5173"}/dashboard/cart`,
      metadata: {
        userId: userId,
        courses: JSON.stringify(courses),
      },
    });

    res.json({
      success: true,
      data: {
        sessionId: session.id,
        url: session.url,
      },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Could not initiate order." });
  }
};

// Verify the payment using Stripe session
exports.verifyPayment = async (req, res) => {
  const { session_id, courses } = req.body;
  const userId = req.user.id;

  if (!session_id || !courses || !userId) {
    return res.status(400).json({ success: false, message: "Payment Failed - missing data" });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status === "paid") {
      await enrollStudents(courses, userId, res);
      return res.status(200).json({ success: true, message: "Payment Verified" });
    }

    return res.status(200).json({ success: false, message: "Payment not completed" });
  } catch (error) {
    console.log("Payment verification error:", error);
    return res.status(500).json({ success: false, message: "Payment verification failed" });
  }
};

// Send Payment Success Email
exports.sendPaymentSuccessEmail = async (req, res) => {
  const { orderId, paymentId, amount } = req.body;
  const userId = req.user.id;

  if (!orderId || !paymentId || !amount || !userId) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the details" });
  }

  try {
    const enrolledStudent = await User.findById(userId);

    await mailSender(
      enrolledStudent.email,
      `Payment Received`,
      paymentSuccessEmail(
        `${enrolledStudent.firstName} ${enrolledStudent.lastName}`,
        amount / 100,
        orderId,
        paymentId
      )
    );

    return res.status(200).json({ success: true, message: "Email sent" });
  } catch (error) {
    console.log("error in sending mail", error);
    return res
      .status(400)
      .json({ success: false, message: "Could not send email" });
  }
};

// Enroll the student in the courses
const enrollStudents = async (courses, userId, res) => {
  if (!courses || !userId) {
    return res
      .status(400)
      .json({
        success: false,
        message: "Please Provide Course ID and User ID",
      });
  }

  for (const courseId of courses) {
    try {
      const enrolledCourse = await Course.findOneAndUpdate(
        { _id: courseId },
        { $push: { studentsEnroled: userId } },
        { new: true }
      );

      if (!enrolledCourse) {
        return res
          .status(500)
          .json({ success: false, error: "Course not found" });
      }

      const courseProgress = await CourseProgress.create({
        courseID: courseId,
        userId: userId,
        completedVideos: [],
      });

      const enrolledStudent = await User.findByIdAndUpdate(
        userId,
        {
          $push: {
            courses: courseId,
            courseProgress: courseProgress._id,
          },
        },
        { new: true }
      );

      // Send enrollment email
      try {
        await mailSender(
          enrolledStudent.email,
          `Successfully Enrolled into ${enrolledCourse.courseName}`,
          courseEnrollmentEmail(
            enrolledCourse.courseName,
            `${enrolledStudent.firstName} ${enrolledStudent.lastName}`
          )
        );
      } catch (emailError) {
        console.log("Email sending failed but enrollment succeeded:", emailError);
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, error: error.message });
    }
  }
};
