import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../Common/RatingStars";
import GetAvgRating from "../../Common/GetAvgRating";

const CourseCard = ({ course, Height }) => {
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReviews);
    setAvgReviewCount(count);
  }, [course]);

  return (
    <>
      <Link to={`/courses/${course._id}`}>
        <div className="rounded-lg shadow-md transition-all duration-200 hover:scale-[1.03] bg-richblack-800">
          <img
            src={course?.thumbnail}
            alt="course thumnail"
            className={`${Height} w-full rounded-t-xl object-cover`}
          />
          <div className="flex flex-col gap-2 px-3 py-4 text-richblack-5">
            <p className="text-xl font-semibold">{course?.courseName}</p>
            <p className="text-sm text-richblack-200">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-25">{avgReviewCount || 0}</span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-richblack-400">
                {course?.ratingAndReviews?.length} Ratings
              </span>
            </div>
            <p className="text-xl font-bold text-yellow-25">Rs. {course?.price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CourseCard;
