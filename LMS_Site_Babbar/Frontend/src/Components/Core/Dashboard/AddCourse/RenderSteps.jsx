import React from "react";
import { FaCheck } from "react-icons/fa6";
import { useSelector } from "react-redux";
import CourseInformationForm from "./CourseInformation/CourseInformationForm";

const RenderSteps = () => {
  const step = useSelector(({ course }) => course.step);

  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];
  return (
    <div>
      <div className="flex flex-col  items-center justify-center m-4">
        <div className="flex items-center px-2">
          {steps.map((item, id) => (
            <div className="flex items-center" key={id}>
              <div
                key={id}
                className={`${
                  item.id == step
                    ? "bg-yellow-900  border-yellow-50 text-yellow-50"
                    : "border-richblack-700 bg-richblack-800 text-richblack-300"
                } px-4 py-2 rounded-full border ${
                  step > item.id ? "px-2 py-4 text-black bg-yellow-50" : ""
                } `}
              >
                {step > item.id ? <FaCheck /> : item.id}
              </div>
              {item.id == 1 && (
                <div
                  className={`flex gap-2 ${
                    item.id < step ? "text-yellow-50" : ""
                  }`}
                >
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>

                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                </div>
              )}
              {item.id == 2 && (
                <div
                  className={`flex gap-2 ${
                    item.id < step ? "text-yellow-50" : ""
                  }`}
                >
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                  <p>-</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between w-full">
          {steps.map((item, id) => (
            <div key={id}>{item.title}</div>
          ))}
        </div>
      </div>
      {step == 1 && <CourseInformationForm />}
    </div>
  );
};

export default RenderSteps;
