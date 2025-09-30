import React, { useState } from "react";
import Input from "../Components/Common/Input";
import CTAButton from "../Components/Core/HomePage/CTAButton";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";
import { sendResetToken } from "../services/APIS/auth";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const [emailSent, setEmailSent] = useState(false);

  const [email, setEmail] = useState("");

  const handleSendMail = async () => {
    if (!email) {
      toast.error("Please enter an email");
      return;
    }
    await sendResetToken(email, dispatch, setEmailSent);
  };

  const navigate = useNavigate();
  return (
    <div className={`flex justify-center  w-screen h-[94vh]`}>
      <div className="flex flex-col mt-52 w-[25%] gap-7 ">
        <div className="text-4xl text-white font-bold">
          {!emailSent ? "Reset your password" : "Check email"}
        </div>
        <div className="text-lg text-richblack-200">
          {!emailSent
            ? "Have no fear. We'll email you instructions to reset your password. If you don't have access to your email we can try account recovery"
            : "We have sent the reset email to " + email}
        </div>
        {!emailSent && (
          <Input
            label={"Email Address"}
            placeholder={"Enter email address"}
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        <div>
          <CTAButton active={true} onClick={handleSendMail}>
            {!emailSent ? "Reset Password" : "Resend email"}
          </CTAButton>
          <button
            className=" mt-4 flex items-center gap-2 text-blue-200 font-semibold"
            onClick={() => navigate("/login")}
          >
            <FaArrowLeftLong /> back to login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
