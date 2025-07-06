const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");

const otpSchema = new mongoose.Schema(
  {
    emaiL: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    expiresAt: {
      expires: 5 * 60,
    },
  },

  { timestamps: true }
);

//sending email for verification
const OTPSender = async (email, otp) => {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email from StudyNotion",
      `<h1>OTP</h1>
        <h6>${otp}</h6>`
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
