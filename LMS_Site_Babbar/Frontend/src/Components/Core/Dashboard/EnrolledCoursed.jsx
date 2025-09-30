import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEnrolledCourses } from "../../../services/APIS/profile";
import ProgressBar from "@ramonak/react-progress-bar";

const EnrolledCoursed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector(({ auth }) => auth.token);
  const profile = useSelector(({ profile }) => profile.user);

  console.log(profile);

  const [enrolledCourses, setEnrolledCourses] = useState(null);
  async function getCourses() {
    const courses = await getEnrolledCourses(token, navigate, dispatch);
    // setEnrolledCourses(courses.data);
  }

  const tempCourses = [
    {
      thumbnail: profile?.imageUrl,
      courseName: "The Complete python course",
      courseDescription: "Short Description",
      duration: "2hr 30 mins",
      progress: 70,
    },
    {
      thumbnail: profile?.imageUrl,
      courseName: "The Complete python course",
      courseDescription: "Short Description",
      duration: "2hr 30 mins",
      progress: 80,
    },
    {
      thumbnail: profile?.imageUrl,
      courseName: "The Complete python course",
      courseDescription: "Short Description",
      duration: "2hr 30 mins",
      progress: 60,
    },
  ];

  const [category, setCategory] = useState("All");
  useEffect(() => {
    getCourses();
    setEnrolledCourses(tempCourses);
  }, []);

  return (
    <div className="text-white mx-4 ">
      <div className="font-bold text-2xl my-4">Enrolled Courses</div>

      <div className="flex duration-200 transition-all  gap-2 bg-richblack-600  text-richblack-200 w-fit p-1 justify-center items-center rounded-full ">
        <div
          onClick={() => setCategory("All")}
          className={` px-4 py-2 rounded-full ${
            category == "All" ? "bg-black px-6 text-richblack-25" : ""
          }`}
        >
          All
        </div>
        <div
          onClick={() => setCategory("Pending")}
          className={` px-4 py-2 rounded-full ${
            category == "Pending" ? "bg-black px-6 text-richblack-25" : ""
          }`}
        >
          Pending
        </div>
        <div
          onClick={() => setCategory("Completed")}
          className={` px-4 py-2 rounded-full ${
            category == "Completed" ? "bg-black px-6 text-richblack-25" : ""
          }`}
        >
          Completed
        </div>
      </div>

      {!enrolledCourses ? (
        <div>Loading...</div>
      ) : !enrolledCourses?.length ? (
        <p>You have not enrolled in any course yet</p>
      ) : (
        <div className="w-[80vw] ">
          <div className="flex gap-10 w-full my-4 bg-richblack-600 py-4 px-2 rounded ">
            <p className="w-[50%]">Course Name</p>
            <p className="w-[20%]">Duration</p>
            <p className="w-[30%]">Progress</p>
          </div>
          {/* Cards */}
          <div className="flex flex-col gap-8">
            {enrolledCourses.map((course, index) => (
              <div key={index} className="flex  relative ">
                <div className="flex gap-4 px-1 py-2 w-[50%]">
                  <img src={course.thumbnail} width={80} className="rounded" />
                  <div className="flex flex-col justify-around">
                    <p>{course.courseName}</p>
                    <p>{course.courseDescription}</p>
                  </div>
                </div>
                <div className="w-[20%]">
                  <div>{course.duration}</div>
                </div>
                <div>
                  <p className="text-richblack-500">
                    progress: {course.progress || 0}%
                  </p>
                  <ProgressBar completed={course.progress || 0} />
                </div>
                <div className="w-[2px] absolute right-0 top-0 h-full bg-richblack-400"></div>

                <div className="h-[2px] w-full absolute bottom-0 bg-richblack-400"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrolledCoursed;
