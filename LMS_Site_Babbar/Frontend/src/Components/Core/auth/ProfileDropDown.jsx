import React, { useRef, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { VscDashboard, VscSignOut } from "react-icons/vsc";
import { logout } from "../../../services/APIS/auth";
import { useDispatch } from "react-redux";

const ProfileDropDown = ({ user, token }) => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const logoutHandler = async (e) => {
    e.stopPropagation();
    await logout(dispatch, navigate, token);
  };

  return (
    <button className="relative " onClick={() => setOpen(!open)} ref={ref}>
      <div className="flex items-center gap-x-1 ">
        <img
          src={user?.imageUrl}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[30px] rounded-full object-cover"
        />
        {open ? (
          <AiOutlineCaretUp className="text-sm text-richblack-100" />
        ) : (
          <AiOutlineCaretDown className="text-sm text-richblack-100" />
        )}
      </div>

      <div
        className={`z-50 absolute  ${
          open ? "-right-20" : "-right-72"
        } top-14 h-fit   pl-1 pr-8 py-1 duration-100 ease-in text-white bg-richblack-800 border-2 rounded-md border-richblack-200  flex flex-col gap-2  ${
          open ? "opacity-100" : "opacity-0"
        } `}
      >
        <Link
          onClick={(e) => e.stopPropagation()}
          to={"dashboard/profile"}
          className="flex gap-2 items-center hover:scale-105 duration-200 "
        >
          <VscDashboard />
          Dashboard
        </Link>
        <div
          className="flex items-center gap-2 hover:scale-105 duration-200 "
          onClick={logoutHandler}
        >
          <VscSignOut />
          logout
        </div>
      </div>
    </button>
  );
};

export default ProfileDropDown;
