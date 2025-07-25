import React from "react";
import { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const results = HomePageExplore.filter((course) => course.tag === value);
    setCourses(results[0].courses);
    setCurrentCard(results[0].courses[0].heading);
  };
  return (
    <div className="flex flex-col  items-center gap-2 relative">
      <div className="text-4xl font-inter font-bold">
        Unlock the <HighlightText text={" Power of Code"} />
      </div>
      <div className="text-richblack-400">
        Learn To Build Anything. You Can imagine
      </div>
      <div className="flex h-16 items-center justify-between p-2 w-[60%] rounded-full bg-richblack-800 text-richblack-100">
        {tabsName.map((tab, id) => {
          return (
            <div
              key={id}
              onClick={() => setMyCards(tab)}
              className={`py-3 px-6 rounded-full ${
                tab == currentTab
                  ? "bg-richblack-900 text-richblack-5 cursor-pointer"
                  : ""
              } hover:bg-richblack-900 hover:text-richblack-5 transition-colors duration-200  ease-in`}
            >
              {tab}
            </div>
          );
        })}
      </div>
      <div className="flex gap-10 translate-y-[30%] ">
        {courses.map((course, id) => (
          <CourseCard
            key={id}
            setCurrentCard={setCurrentCard}
            heading={course.heading}
            level={course.level}
            description={course.description}
            lessons={course.lessionNumber}
            current={currentCard == course.heading ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
