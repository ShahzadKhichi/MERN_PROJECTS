import React from "react";
import instrucotr from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="flex gap-20  mt-16 items-center">
      <div className="w-[50%] ">
        <img src={instrucotr} alt="" className="shadow-md shadow-white" />
      </div>
      <div className="w-[50%] flex flex-col gap-10">
        <div className="text-4xl font-semibold">
          <h2>Become an</h2>
          <HighlightText text={" Instructor"} />
        </div>
        <p className="font-medium text-[16px] w-[80%] text-richblack-200">
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you love
        </p>
        <div className="w-fit">
          <CTAButton active={true} linkto={"/signup"}>
            <div className="flex gap-2 items-center ">
              start learning today <FaArrowRight />
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
