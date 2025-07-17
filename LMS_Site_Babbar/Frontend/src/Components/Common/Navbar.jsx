import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import CTAButton from "../Core/HomePage/CTAButton";
import { FaArrowDown, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { FaCartArrowDown } from "react-icons/fa";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";
import { RiArrowDownWideLine } from "react-icons/ri";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const [subLinks, setSubLinks] = useState([]);

  const fetchData = async () => {
    try {
      const res = await apiConnector("GET", categories.CATEGORIES_API);

      setSubLinks(res.data.Categories);
    } catch (error) {
      console.log("errro in fetching data of sublinks", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const location = useLocation();

  const [currentPath, setCurrentPath] = useState("/");
  function updatePath() {
    setCurrentPath(location.pathname);
  }
  useEffect(() => {
    updatePath();
  }, [location.pathname]);
  return (
    <nav className="w-full border-richblack-500 border-b-[1px]  ">
      <div className="w-11/12 flex max-w-maxContent items-center justify-between h-16  bg-richblack-900 mx-auto">
        <Link to={"/"} className="hover:scale-105 duration-500">
          <img src={logo} alt="" />
        </Link>
        <ul className="flex text-xl font-inter text-richblack-25 gap-5">
          {NavbarLinks.map((link, id) => (
            <li key={id} className="relative ">
              {link.title == "Catalog" ? (
                <div className="  relative flex group ">
                  <div className="flex gap-2 items-center  duration-200">
                    {link.title}
                    <div className>
                      <RiArrowDownWideLine></RiArrowDownWideLine>
                      <div className="absolute group w-[18vw]  duration-200 mt-2 -left-[86%] rounded-lg bg-richblack-50 -z-10 transition-opacity py-2 px-1 flex flex-col gap-3  text-black group-hover:opacity-100 group-hover:z-10 opacity-0">
                        <div className="bg-richblack-50 w-6 h-6  right-[45%] -top-2 rotate-45 t  rounded absolute"></div>
                        {subLinks.map((link, id) => (
                          <Link
                            key={id}
                            className="hover:bg-richblack-100 w-fit duration-300 rounded-xl py-1 px-6"
                          >
                            {link?.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`hover:scale-105 duration-200 ${
                    link.path == currentPath ? "text-yellow-5" : ""
                  }`}
                >
                  {link.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="flex text-richblack-25 gap-4 text-xl m-2">
          {token ? (
            user?.accountType == "Student" ? (
              <>
                <div className="hover:scale-110 duration-200">
                  <FiSearch />
                </div>
                <Link
                  to={"/dashboard/cart"}
                  className="relative hover:scale-110 duration-200"
                >
                  {totalItems ? (
                    <p className="absolute -top-2 -right-2 rounded-full px-1 py-0 bg-yellow-25 text-sm">
                      <span className="text-black  font-semibold">
                        {totalItems}
                      </span>
                    </p>
                  ) : (
                    ""
                  )}
                  <FaCartArrowDown />
                </Link>
                <div className="hover:scale-110 duration-200">
                  <FaUser />
                </div>
              </>
            ) : (
              <>
                <div className="hover:scale-110 duration-200">
                  <FiSearch />
                </div>
                <div className="hover:scale-110 duration-200">
                  <FaUser />
                </div>
              </>
            )
          ) : (
            <>
              <CTAButton linkto={"/login"}>Login</CTAButton>
              <CTAButton linkto={"/signup"}>Signup</CTAButton>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
