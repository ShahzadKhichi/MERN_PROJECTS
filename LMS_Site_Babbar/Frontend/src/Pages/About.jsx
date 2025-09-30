import React from "react";
import HighlightText from "../Components/Core/HomePage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";

import FoundingStory from "../assets/Images/FoundingStory.png";
import Stats from "../Components/Core/AboutPage/Stats";
import LearningGrid from "../Components/Core/AboutPage/LearningGrid";
import ContactForm from "../Components/Core/AboutPage/ContactForm";

const About = () => {
  return (
    <div className="w-screen h-full flex flex-col  gap-10 items-center ">
      {/* section 1 */}
      <section className="w-[100vw]  relative bg-richblack-700 gap-4 flex flex-col items-center pt-14 pb-64">
        <div className="text-4xl text-richblack-5 font-inter font-bold flex flex-col justify-center items-center">
          Driving innovation in Online Educatoin for a
          <HighlightText text={"Brighter Future"}></HighlightText>
        </div>
        <div className=" text-richblack-200 font-inter w-[43%] text-center">
          Studynotion is at the forefront of driving innovation in online
          education. We're passionate about creating a brighter future by
          offering cutting-edge courses, leveraging emerging technologies, and
          nurturing a vibrant learning community.
        </div>
        <div className="flex gap-8 absolute  -bottom-28">
          <img src={BannerImage1} alt="" className="rounded" />
          <img src={BannerImage2} alt="" className="rounded" />
          <img src={BannerImage3} alt="" className="rounded" />
        </div>
      </section>
      {/* section 2 */}
      <section className="w-11/12 mx-auto  mt-32 gap-4 flex flex-col items-center  ">
        <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center w-[70%] text-white">
          We are passionate about revolutionizing the way we learn. Our
          innovative platform <HighlightText text={"combines technology"} />,{" "}
          <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            expertise
          </span>
          , and community to create an
          <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
            unparalleled educational experience.
          </span>
        </div>
      </section>
      {/* Section 3  */}
      <section className="w-11/12 mx-auto  ">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-8">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Seciont 4 */}
      <section className="w-full mx-auto  ">
        <Stats />
      </section>
      {/* Section 5 */}
      <section className="w-full flex flex-col items-center justify-center">
        <LearningGrid />
        <ContactForm />
      </section>
      <section className=" "></section>
      <section className=" "></section>
    </div>
  );
};

export default About;
