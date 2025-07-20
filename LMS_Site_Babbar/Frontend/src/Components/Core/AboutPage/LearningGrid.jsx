import React from "react";
import CTAButton from "../HomePage/CTAButton";
import HighlightText from "../HomePage/HighlightText";

const LearningGrid = () => {
  const card1 = {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  };
  const LearningGridArray = [
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },

    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];
  return (
    <div className="grid mx-auto lg:grid-cols-4 grid-cols-1 mb-10 lg:grid-rows-2 mt-20 p-2  w-[65%]  gap-2  ">
      <div className="lg:col-span-2 flex flex-col gap-6  pr-10 pb-10 hover:scale-105 duration-200">
        <div className="text-4xl font-bold text-richblack-5 ">
          {card1.heading} <HighlightText text={card1.highlightText} />
        </div>
        <div className="text-richblack-300 font-semibold">
          {card1.description}
        </div>
        <div className="w-fit">
          {" "}
          <CTAButton linkto={card1.BtnLink} active={true}>
            {card1.BtnText}
          </CTAButton>
        </div>
      </div>
      {LearningGridArray.map((item, key) => {
        return (
          <div
            key={key}
            className={` ${
              key % 2 == 0 ? "bg-richblack-600" : "bg-richblack-800"
            } flex flex-col gap-5 p-5 rounded-sm ${
              key == 2 ? "lg:col-start-2" : ""
            } hover:scale-105 duration-200`}
          >
            <div className="text-richblack-5 font-semibold text-lg">
              {item.heading}
            </div>
            <div className="text-richblack-300">{item.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
