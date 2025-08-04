import React from "react";
import CTAButton from "../HomePage/CTAButton";

const LogoutModal = () => {
  return (
    <div className="absolute top-[50%] right-[50%] w-[300px] ">
      <div className="bg-richblack-800 rounded-lg p-4 justify-center flex flex-col gap-10">
        <div className="w-full flex text-brown-5 text-lg font-inter font-semibold  justify-center">
          Are you sure to logout?
        </div>
        <div className="flex justify-center">
          <div className="flex items-center mx-10">No</div>
          <CTAButton active={true}>Yes</CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
