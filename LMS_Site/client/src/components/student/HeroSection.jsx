import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const HeroSection = () => {
  return (
    <div className="relative  bg-gradient-to-r from-blue-500 bg-indigo-600 dar:to-gray-900 py-16 px-4 text-center w-full  h-auto">
      <div className="flex-col place-items-center ">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find the Best Courses for You
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Discover, Learn, and Upskill with our Wide range of courses
        </p>
        <form
          action=""
          className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl w-[100%] mb-8 place-center"
        >
          <Input
            type="text"
            placeholder="Search Courses"
            className="flex-grow  border-none  focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
          />
          <Button className="bg-blue-600 dark:bg-gray-800 text-white px-6 py-3 rounded-r-full hover:bg-blue-700  ">
            Search
          </Button>
        </form>
        <Button className="bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200 ">
          Explore courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
