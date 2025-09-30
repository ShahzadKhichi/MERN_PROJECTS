import React from "react";
import RenderSteps from "./RenderSteps";

const AddCourse = () => {
  return (
    <div className="text-white w-full h-full flex justify-center py-12 ">
      <div className="flex  flex-col items-start w-fit">
        <h1>Add Course</h1>
        <div>
          <RenderSteps />
        </div>
      </div>
      <div className="bg-richblack-600 w-[20%] h-fit m-4 flex flex-col items-start p-4 pb-8 rounded-sm justify-center ">
        <p className="text-xl font-semibold py-4">
          Course Upload Tips{" "}
          <span className="text-yellow-100 bg-yellow-100 rounded-full">💭</span>
        </p>
        <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
          <li>Set the Course Price option or make it free.</li>
          <li>Standard size for the course thumbnail is 1024x576.</li>
          <li>Video section controls the course overview video.</li>
          <li>Course Builder is where you create & organize a course.</li>
          <li>
            Add Topics in the Course Builder section to create lessons, quizzes,
            and assignments.
          </li>
          <li>
            Information from the Additional Data section shows up on the course
            single page.
          </li>
          <li>Make Announcements to notify any important</li>
          <li>Notes to all enrolled students at once.</li>
        </ul>
      </div>
    </div>
  );
};

export default AddCourse;
