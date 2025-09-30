import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { Link } from "react-router-dom";
import { VscDashboard, VscSignOut } from "react-icons/vsc";

import { useSelector } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";

import { sidebarLinks } from "../../../data/dashboard-links";
import SideBarLink from "./SideBarLink";

const SideBar = ({ setLogoutCm }) => {
  const user = useSelector(({ profile }) => profile.user);

  return (
    <div className="flex flex-col h-full text-white w-full py-10 text-lg     bg-richblack-700">
      <div className="h-fit w-full flex flex-col gap-1">
        {sidebarLinks.map((link, id) =>
          link?.type == user?.accountType ? (
            <SideBarLink
              path={link.path}
              icon={link.icon}
              name={link.name}
              key={id}
            />
          ) : !link.type ? (
            <SideBarLink
              path={link.path}
              icon={link.icon}
              name={link.name}
              key={id}
            />
          ) : null
        )}
      </div>

      <div className="w-full h-1 bg-richblack-600 mt-8 mb-4"></div>
      <div className="h-full w-full flex flex-col gap-1">
        <SideBarLink
          path={"/dashboard/settings"}
          name={"Settings"}
          icon={"VscSettingsGear"}
        />
        <div
          onClick={() => setLogoutCm(true)}
          className="flex  font-inter  hover:bg-yellow-800 duration-300 py-1 group text-xl gap-2 items-center"
        >
          <div className="w-1 h-full  bg-yellow-50 opacity-0 group-hover:opacity-100 duration-200 mr-4 "></div>
          <IoLogOutOutline />
          Logout
        </div>
      </div>
    </div>
  );
};

export default SideBar;
