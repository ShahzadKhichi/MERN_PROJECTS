import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import CTAButton from "../Core/HomePage/CTAButton";
import { FaArrowDown, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";
import { FaCartArrowDown } from "react-icons/fa";
import { apiConnector } from "../../services/apiConnector";
import { categories } from "../../services/apis";
import { RiArrowDownWideLine } from "react-icons/ri";
import ProfileDropDown from "../Core/auth/ProfileDropDown";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const user = useSelector(({ profile }) => profile.user);
  const { totalItems } = useSelector((state) => state.cart);

  const [subLinks, setSubLinks] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fetchData = async () => {
    try {
      const res = await apiConnector("GET", categories.CATEGORIES_API);
      setSubLinks(res.data.Categories || res.data.data || res.data);
    } catch (error) {
      console.log("error in fetching data of sublinks", error);
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
    setIsMobileMenuOpen(false);
  }, [location.pathname, totalItems]);

  return (
    <nav className="w-full border-richblack-500 border-b-[1px]">
      <div className="w-11/12 flex max-w-maxContent items-center justify-between h-16 bg-richblack-900 mx-auto">
        <Link to={"/"} className="hover:scale-105 duration-500">
          <img src={logo} alt="Logo" className="w-[120px] md:w-[160px]" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex text-xl font-inter text-richblack-25 gap-5">
          {NavbarLinks.map((link, id) => (
            <li key={id} className="relative ">
              {link.title === "Catalog" ? (
                <div className="relative flex">
                  <div className="flex gap-2 relative group items-center duration-200 cursor-pointer">
                    {link.title}
                    <RiArrowDownWideLine />
                    <div className="absolute top-8 -left-16 group-hover:opacity-100 group-hover:z-50 -z-10 transition-opacity duration-200 opacity-0 invisible group-hover:visible">
                      <div className="group w-[300px] rounded-lg bg-richblack-50 py-2 px-1 flex flex-col gap-3 text-black relative">
                        <div className="bg-richblack-50 w-6 h-6 right-[45%] -top-2 rotate-45 rounded absolute"></div>
                        {subLinks && subLinks.length > 0 ? (
                          subLinks.map((subLink, subId) => (
                            <Link
                              to={`/catalog/${subLink.name
                                ?.split(" ")
                                .join("-")
                                .toLowerCase()}`}
                              key={subId}
                              className="hover:bg-richblack-100 w-full duration-300 rounded-xl py-2 px-4"
                            >
                              {subLink?.name}
                            </Link>
                          ))
                        ) : (
                          <div className="py-2 px-4">No Categories Found</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`hover:scale-105 duration-200 ${
                    link.path === currentPath ? "text-yellow-25" : ""
                  }`}
                >
                  {link.title}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex text-richblack-25 gap-4 text-xl m-2 items-center">
          {token ? (
            <>
              <div className="hover:scale-110 duration-200 cursor-pointer">
                <FiSearch className="font-bold text-3xl" />
              </div>
              {user?.accountType === "Student" && (
                <Link
                  to={"/dashboard/cart"}
                  className="relative hover:scale-110 duration-200"
                >
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 rounded-full px-2 py-0 bg-yellow-25 text-sm text-black font-semibold animate-bounce">
                      {totalItems}
                    </span>
                  )}
                  <FaCartArrowDown size={24} />
                </Link>
              )}
              <ProfileDropDown user={user} token={token} />
            </>
          ) : (
            <>
              <CTAButton linkto={"/login"}>Login</CTAButton>
              <CTAButton linkto={"/signup"}>Signup</CTAButton>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center text-richblack-25 gap-4">
          {token && user?.accountType === "Student" && (
            <Link
              to={"/dashboard/cart"}
              className="relative hover:scale-110 duration-200"
            >
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 rounded-full px-2 py-0 bg-yellow-25 text-sm text-black font-semibold animate-bounce">
                  {totalItems}
                </span>
              )}
              <FaCartArrowDown size={24} />
            </Link>
          )}
          <button
            className="text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-richblack-800 text-richblack-25 absolute w-full z-50 flex flex-col border-b border-richblack-500 py-4 shadow-lg">
          <ul className="flex flex-col items-center gap-4 text-lg">
            {NavbarLinks.map((link, id) => (
              <li key={id}>
                {link.title === "Catalog" ? (
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-yellow-25 mb-2">
                      Catalog
                    </span>
                    {subLinks &&
                      subLinks.map((subLink, subId) => (
                        <Link
                          to={`/catalog/${subLink.name
                            ?.split(" ")
                            .join("-")
                            .toLowerCase()}`}
                          key={subId}
                          className="py-1 px-4 hover:text-yellow-25 duration-200"
                        >
                          {subLink?.name}
                        </Link>
                      ))}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`hover:text-yellow-25 duration-200 ${
                      link.path === currentPath ? "text-yellow-25" : ""
                    }`}
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
            {!token ? (
              <div className="flex flex-col gap-3 mt-4 w-1/2 mx-auto">
                <Link
                  to="/login"
                  className="bg-richblack-700 text-center py-2 rounded-md hover:bg-richblack-600 border border-richblack-600"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-yellow-50 text-black font-semibold text-center py-2 rounded-md hover:bg-yellow-100"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div className="mt-4">
                <ProfileDropDown user={user} token={token} />
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
