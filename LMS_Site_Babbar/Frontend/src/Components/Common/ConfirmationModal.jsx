import React from "react";
import CTAButton from "../Core/HomePage/CTAButton";

const ConfirmationModal = ({
  handler_1,
  handler_2,
  text,
  visible,
  btnText,
}) => {
  return (
    <div
      className={`bg-richblack-800 opacity-95 rounded-lg p-4  justify-center flex flex-col gap-5 w-fit px-8 m-2 transition-all duration-300 ${
        visible ? "" : "hidden"
      }`}
    >
      <div className="w-full flex text-white text-2xl font-inter font-semibold  justify-center">
        Are you sure?
      </div>
      <div className="text-richblack-400">{text}</div>
      <div className="flex justify-center h-fit gap-4 w-full ">
        <CTAButton active={true} onClick={handler_1}>
          {btnText}
        </CTAButton>
        <div
          onClick={handler_2}
          className="flex items-center  bg-richblack-300  font-inter font-semibold text-black px-6 rounded-md hover:scale-105 duration-200"
        >
          Cancel
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
