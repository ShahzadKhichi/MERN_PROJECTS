const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const { otpTemplate } = require("../templates/Email-OTP");

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    expiresAt: {
      expires: Number,
    },
  },

  { timestamps: true }
);

//sending email for verification
const OTPSender = async (email, otp) => {
  try {
    const body = otpTemplate(otp);
    const mailResponse = await mailSender(
      email,
      "Verification Email from StudyNotion",
      body
    );
  } catch (error) {
    console.log("error occures during sending otp ", error);
    throw error;
  }
};
otpSchema.pre("save", async function (next) {
  await OTPSender(this.email, this.otp);
  next();
});

module.exports = mongoose.model("OTP", otpSchema);
