import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as icons from "react-icons/vsc";

const SideBarLink = ({ icon, path, name }) => {
  const Icon = icons[icon];

  const location = useLocation();
  console.log(location);

  return (
    <div
      className={`flex  items-center text-xl font-inter justify-center group hover:bg-yellow-800 transition-all py-1 duration-300 ${
        path == location.pathname ? "bg-yellow-800 text-yellow-50" : ""
      }`}
    >
      {
        <div
          className={`h-full w-1 bg-yellow-25 duration-300 mr-4 ${
            path == location.pathname ? "opacity-100" : "opacity-0"
          } group-hover:opacity-100 `}
        ></div>
      }
      <div className="w-full px-2 flex gap-2 justify-start items-center">
        <Icon />
        <Link to={path}>{name}</Link>
      </div>
    </div>
  );
};

export default SideBarLink;
