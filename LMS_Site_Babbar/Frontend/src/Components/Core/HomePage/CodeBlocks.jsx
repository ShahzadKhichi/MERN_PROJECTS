import React from "react";
import CTAButton from "./CTAButton";
import HighlightText from "./HighlightText";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  direction,
  heading1,
  subHeading,
  btn1,
  btn2,
  bgGradient,
  codeblock,
}) => {
  return (
    <div
      className={`flex  flex-col md:flex-row ${direction}  my-20 items-center lg:justify-between lg:-translate-x-0 md:justify-center -translate-x-10 gap-20 mt-20 `}
    >
      <div className="flex flex-col w-[50%] gap-8 ">
        <div className="lg:text-4xl md:text-3xl font-semibold">
          {heading1.before} <HighlightText text={heading1.highlighted} />
          {heading1.after}
        </div>
        <h4 className="text-richblack-300 font-bold">{subHeading}</h4>
        <div className="flex flex-col lg:flex-row gap-8 md:flex-row ">
          <CTAButton active={btn1.active} linkto={btn1.linkto}>
            <div className="flex gap-2 items-center">
              {btn1.text}
              <FaArrowRight></FaArrowRight>
            </div>
          </CTAButton>
          <CTAButton active={btn2.active} linkto={btn2.linkto}>
            {btn2.text}
          </CTAButton>
        </div>
      </div>

      <div className="flex w-[50%] relative text-[10px] lg:text-[15px] shadow-2xl bg-[#050c15] p-10 rounded-xl opacity-100 font-medium">
        {bgGradient}
        <div className="flex flex-col text-center w-[10%] text-richblack-400 font-inter ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
        </div>
        <div
          className={`w-[90%] flex flex-col font-mono font-bold ${"text-yellow-25"}  pr-2`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            wrapper="pre"
            omitDeletionAnimation={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
