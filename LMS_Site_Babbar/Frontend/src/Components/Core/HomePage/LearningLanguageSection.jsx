import React from "react";
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import im1 from "../../../assets/Images/Know_your_progress.png";
import im2 from "../../../assets/Images/Compare_with_others.png";
import im3 from "../../../assets/Images/Plan_your_lessons.png";

const LearningLanguageSection = () => {
  return (
    <div className="flex flex-col gap-5 mt-48 items-center mb-10">
      <div className="text-4xl font-inter font-bold">
        Your Swiss knife for
        <HighlightText text={" Learning any language"} />
      </div>
      <div className="font-inter text-center mx-auto mt-2 text-richblack-600 w-[70%]">
        Using spin making learning multiple languages easy. with 20+ languages
        realistic voice-over, progress tracking custom schedule and more.
      </div>
      <div className="flex justify-center items-center mt-5">
        <img src={im1} alt="" className="object-contain -mr-24" />
        <img src={im2} alt="" />
        <img src={im3} alt="" className="-m-32" />
      </div>
      <div className="w-fit">
        <CTAButton active={true} linkto={"/signup"}>
          Learn More
        </CTAButton>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
