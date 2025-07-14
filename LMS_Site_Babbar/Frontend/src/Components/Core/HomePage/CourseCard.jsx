import React from "react";
import { FaMale } from "react-icons/fa";

const CourseCard = ({
  heading,
  description,
  lessons,
  level,
  current,
  setCurrentCard,
}) => {
  return (
    <div
      onClick={() => setCurrentCard(heading)}
      className={` hover:scale-105 transition-transform duration-500 ${
        current ? "translate-x-2 translate-y-2 bg-yellow-100 rounded" : ""
      }`}
    >
      <div
        className={`lg:w-[350px] lg:h-[300px]  justify-between  ${
          current
            ? "bg-white text-richblack-700   -translate-x-2 -translate-y-2"
            : "bg-richblack-800 text-richblack-25"
        } flex flex-col rounded`}
      >
        <div className="p-4 flex flex-col gap-5">
          <div className="font-inter font-bold text-xl">{heading}</div>
          <div className="text-richblack-500">{description}</div>
        </div>
        <div className="p-2">
          <div
            className={`flex justify-between items-center  font-semibold font-inter transition-colors duration-200 ${
              current
                ? "text-caribbeangreen-600 hover:text-caribbeangreen-400"
                : "text-richblack-500 hover:text-richblack-200"
            }`}
          >
            <div className="flex gap-1 items-center ">
              <FaMale></FaMale>
              {level}
            </div>
            <div className="flex gap-1 items-center">
              <FaMale></FaMale>
              {lessons + " Lessons"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
