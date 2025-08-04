import React from "react";
import CTAButton from "../HomePage/CTAButton";

const ConfirmationModal = ({ handler_1, handler_2, text, visible }) => {
  return (
    <div
      className={`bg-richblack-800 rounded-lg p-4 justify-center flex flex-col gap-10 w-fit px-8 m-2 transition-all duration-300 ${
        visible ? "" : "hidden"
      }`}
    >
      <div className="w-full flex text-brown-5 text-lg font-inter font-semibold  justify-center">
        {text}
      </div>
      <div className="flex justify-center gap-4 w-full ">
        <div
          onClick={handler_1}
          className="flex items-center  bg-richblack-300 py-1 font-inter font-semibold text-black px-4 rounded-md hover:scale-105 duration-200"
        >
          Cancel
        </div>
        <CTAButton active={true} onClick={handler_2}>
          Yes
        </CTAButton>
      </div>
    </div>
  );
};

export default ConfirmationModal;
