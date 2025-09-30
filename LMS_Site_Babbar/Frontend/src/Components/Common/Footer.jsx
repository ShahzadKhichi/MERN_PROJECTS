import React from "react";
import { FooterLink2, FooterLink1 } from "../../data/footer-links";

import Logo from "../../assets/Logo/Logo-Full-Light.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center it w-full  bg-richblack-800 pt-10">
      <div className="flex flex-col h-[100%]  w-[70%]">
        <div className="h-[90%] flex mb-4  lg:flex-row flex-col lg:gap-0 gap-10 ">
          <div className="w-[50%] flex gap-10 -translate-y-4">
            <div className="flex flex-col gap-2">
              <div>{<img src={Logo} />}</div>
              <div className="flex flex-col gap-2">
                <h2 className="text-white font-bold">{FooterLink1[0].title}</h2>
                {FooterLink1[0].links.map((link, id) => (
                  <div
                    className="text-richblack-400 hover:text-richblack-25 transition-colors duration-200 w-fit "
                    key={id}
                  >
                    {link.title}
                  </div>
                ))}
                <div className="flex gap-2 items-center ">
                  <FaFacebook className="text-richblack-500 hover:text-richblack-25 transition-colors duration-200 "></FaFacebook>{" "}
                  <FaGoogle className="text-richblack-500 hover:text-richblack-25 transition-colors duration-200"></FaGoogle>
                  <FaTwitter className="text-richblack-500 hover:text-richblack-25 transition-colors duration-200"></FaTwitter>{" "}
                  <FaYoutube className="text-richblack-500 hover:text-richblack-25 transition-colors duration-200"></FaYoutube>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="text-white font-bold">{FooterLink1[1].title}</h2>
                {FooterLink1[1].links.map((link, id) => (
                  <div
                    className="text-richblack-400 hover:text-richblack-25 transition-colors duration-200 w-fit "
                    key={id}
                  >
                    {link.title}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-white font-bold">{FooterLink1[2].title}</h2>
                {FooterLink1[2].links.map((link, id) => (
                  <div
                    className="text-richblack-400 hover:text-richblack-25 transition-colors duration-200 w-fit "
                    key={id}
                  >
                    {link.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8 ml-12">
              <div className="flex flex-col gap-2">
                <h2 className="text-white font-bold">{FooterLink1[3].title}</h2>
                {FooterLink1[3].links.map((link, id) => (
                  <div
                    className="text-richblack-400 hover:text-richblack-25 transition-colors duration-200 w-fit "
                    key={id}
                  >
                    {link.title}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-white font-bold">{FooterLink1[4].title}</h2>
                {FooterLink1[4].links.map((link, id) => (
                  <div
                    className="text-richblack-400 hover:text-richblack-25 transition-colors duration-200 w-fit "
                    key={id}
                  >
                    {link.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-[1px] w-full h-[2px] lg:h-auto bg-richblack-700"></div>
          <div className="w-[50%] flex gap-20 pl-8">
            {FooterLink2.map((item, id) => (
              <div className="flex flex-col gap-3 -translate-y-2 pb-6" key={id}>
                <h2 className="text-white font-bold font-inter ">
                  {item.title}
                </h2>
                {item.links.map((link, index) => (
                  <div
                    key={index}
                    className="text-richblack-500 hover:text-richblack-25 transition-colors duration-200"
                  >
                    {link.title}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* line */}
        <div className="h-[1px]  bg-richblack-700 "></div>
        {/* lower section */}
        <div className="flex h-[15vh] justify-between items-center  font-inter text-richblack-500 ">
          <div className="flex gap-2  items-center">
            <div>Privacy Policy</div>
            <div className="w-[1px] h-[18px] bg-richblack-700"></div>
            <div>Cookie Policy</div>
            <div className="w-[1px] h-[18px] bg-richblack-700"></div>
            <div>Terms</div>
          </div>
          <div>@{new Date().getFullYear()} StudyNotion</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
