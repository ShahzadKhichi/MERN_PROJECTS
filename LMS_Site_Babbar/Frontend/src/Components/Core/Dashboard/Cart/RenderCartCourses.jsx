import React from "react";
import ReactStars from "react-rating-stars-component";
import { GiNinjaStar } from "react-icons/gi";
const RenderCartCourses = ({ courses }) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <div>
          <h1>The Complete Python Courses</h1>
          <p>Name</p>
          <div className="flex gap-2">
            <p>4.5</p>
            <ReactStars
              count={5}
              size={20}
              edit={false}
              activeColor={"#ffd700"}
              emptyIcon={<GiNinjaStar />}
              fullIcon={<GiNinjaStar />}
            />

            <div>Review Count</div>
          </div>
          <div className="flex gap-2">
            <p>Total</p>
            <p>Courses</p>
            <p>Begineer</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2 p-2">
            icon
            <p>remove</p>
          </div>
          <div className="text-yellow-200">Rs 1700</div>
        </div>
      </div>
    </div>
  );
};

export default RenderCartCourses;
