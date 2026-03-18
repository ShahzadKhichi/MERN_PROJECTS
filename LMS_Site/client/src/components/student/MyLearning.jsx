import React from "react";
import { CourseSkeleton } from "./Courses";
import Course from "./Course";
const MyLearning = () => {
  const isLoading = false;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="max-w-4xl mx-auto my-24 px-4 md:px-0 ">
      <h1 className="font-bold text-2xl">My Learning</h1>
      <div className="my-5 ">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {arr.map((index) => (
              <CourseSkeleton />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((index) => (
              <Course />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLearning;
