import React, { useEffect, useState } from "react";
import { PiClockCounterClockwiseDuotone } from "react-icons/pi";
import CTAButton from "../Components/Core/HomePage/CTAButton";
import OTPInput from "react-otp-input";
import Input from "../Components/Common/Input";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendOTP, signup } from "../services/APIS/auth";
import toast from "react-hot-toast";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupData = useSelector(({ auth }) => auth.signupData);

  useEffect(() => {
    if (!signupData) navigate("/");
  });

  const signupHandler = async () => {
    if (otp.length < 6) {
      toast.error("Invalid OTP");
      return;
    }
    await signup({ ...signupData, otp }, navigate, dispatch);
  };

  const resendHandler = async () => {
    await sendOTP(signupData, navigate, dispatch);
  };

  return (
    <div className={`flex justify-center  w-screen h-[94vh]`}>
      <div className="flex flex-col mt-52 w-[280px] lg:w-[320px] gap-7 ">
        <div className="text-4xl text-white font-bold">Verify email</div>
        <div className="text-lg text-richblack-200">
          A verification code has been sent to you. Enter the code below
        </div>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          shouldAutoFocus={true}
          renderSeparator={
            <span className="text-richblack-500 m-1 font-bold text-lg">-</span>
          }
          renderInput={(props) => <Input {...props} />}
        />
        <div className="font-semibold text-blue-300 ">
          <CTAButton active={true} onClick={signupHandler}>
            Verify Email
          </CTAButton>
          <div className="w-full flex flex-row-reverse">
            <button
              className="flex items-center gap-2 mt-2 hover:scale-105 duration-200 "
              onClick={resendHandler}
            >
              <PiClockCounterClockwiseDuotone fontSize={20} />
              Resend it
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
