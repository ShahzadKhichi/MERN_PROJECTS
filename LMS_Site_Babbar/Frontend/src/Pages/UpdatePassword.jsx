import React, { useState } from "react";
import InputPassword from "../Components/Common/InputPassword";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import CTAButton from "../Components/Core/HomePage/CTAButton";
import { toast } from "react-hot-toast";
import { resetPassword } from "../services/APIS/auth";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const token = location.pathname.split("/")[2];
  const [data, setData] = useState({
    token,
    password: "",
    confirmPassword: "",
  });

  const handleReset = async () => {
    if (!data.password || !data.token || !data.confirmPassword) {
      toast.error("All fields are required");
      return;
    } else if (data.password != data.confirmPassword) {
      toast.error("both password must be same");
      return;
    }
    await resetPassword(data, dispatch, navigate);
  };

  return (
    <div className={`flex justify-center  w-screen h-[94vh]`}>
      <div className="flex flex-col mt-52 w-[25%] gap-7 ">
        <div className="text-4xl text-white font-bold">Choose new Password</div>
        <div className="text-lg text-richblack-200">
          Almost done. Enter your new password and you're all set
        </div>

        <InputPassword
          label={"New password"}
          required={!data.password}
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <InputPassword
          label={"Confirm new password"}
          required={!data.confirmPassword}
          value={data.confirmPassword}
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value })
          }
        />

        <div>
          <CTAButton active={true} onClick={handleReset}>
            Reset Password
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
