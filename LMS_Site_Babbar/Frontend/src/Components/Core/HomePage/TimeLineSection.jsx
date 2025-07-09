import React from "react";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const timeline = [
  {
    logo: logo1,
    heading: "Leadership",
    subHeading: "Fully commited to the  success company",
  },
  {
    logo: logo2,
    heading: "Leadership",
    subHeading: "Fully commited to the  success company",
  },

  {
    logo: logo3,
    heading: "Leadership",
    subHeading: "Fully commited to the  success company",
  },
  {
    logo: logo4,
    heading: "Leadership",
    subHeading: "Fully commited to the  success company",
  },
];

const TimeLineSection = () => {
  return (
    <div className="flex gap-10 items-center">
      <div className="flex flex-col gap-8 w-[45%]">
        {timeline.map((item, index) => (
          <div className="flex  gap-6 items-center " key={index}>
            <div className="relative">
              <img src={item.logo} className="w-[25px] h-[25px]" alt="" />
              {index != timeline.length - 1 && (
                <div className="absolute -bottom-12 left-3 flex flex-col gap-1">
                  <div className="w-1 h-1 bg-richblack-200 rounded-full"></div>
                  <div className="w-1 h-1 bg-richblack-200 rounded-full"></div>
                  <div className="w-1 h-1 bg-richblack-200 rounded-full"></div>
                  <div className="w-1 h-1 bg-richblack-200 rounded-full"></div>
                  <div className="w-1 h-1 bg-richblack-200 rounded-full"></div>
                  <div className="w-1 h-1 bg-richblack-200 rounded-full"></div>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <h2 className="font-semibold font-inter text-[18px]">
                {item.heading}
              </h2>
              <h3 className="text-base">{item.subHeading}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="relative  ">
        <img
          src={timelineImage}
          alt="timeline image"
          className="shadow-white object-cover h-fit rounded"
        />
        <div className="absolute -bottom-10 translate-x-[25%] rounded  flex bg-caribbeangreen-700 text-white items-center  p-2 h-[20%] gap-4">
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold">10</p>
            <p className="text-caribbeangreen-100 text-sm">
              Years of Experience
            </p>
          </div>
          <div className="w-[3px] h-[50px] rounded bg-caribbeangreen-50"></div>
          <div className="flex items-center gap-2">
            <p className="text-3xl font-bold">250</p>
            <p className="text-caribbeangreen-100 text-sm">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
