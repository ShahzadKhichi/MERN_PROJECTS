import React from "react";
import { Link } from "react-router-dom";

const CTAButton = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`text-center px-6 py-3 lg:text-[15px] text-[10px] rounded-md font-bold  ${
          active ? "bg-yellow-50 text-black " : "bg-richblack-800"
        }
          hover:scale-105 transition-transform duration-200`}
      >
        {children}
      </div>
    </Link>
  );
};

export default CTAButton;
