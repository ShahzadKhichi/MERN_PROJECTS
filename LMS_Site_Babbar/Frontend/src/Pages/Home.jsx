import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../Components/Core/HomePage/HighlightText";
import CTAButton from "../Components/Core/HomePage/CTAButton";
import bannerVideo from "../assets/Images/banner.mp4";
import CodeBlocks from "../Components/Core/HomePage/CodeBlocks";
import TimeLineSection from "../Components/Core/HomePage/TimeLineSection";
import LearningLanguageSection from "../Components/Core/HomePage/LearningLanguageSection";
import InstructorSection from "../Components/Core/HomePage/InstructorSection";
import Footer from "../Components/Common/Footer";
const Home = () => {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      {/* section 1 */}
      <section className="flex relative mx-auto w-11/12  items-center text  text-white flex-col mt-10 ">
        <div className="flex flex-col w-full items-center gap-12 ">
          <div className="w-fit font-bold transition-transform hover:scale-105 duration-200 bg-richblack-800 hover:bg-richblack-900 text-richblack-200 rounded-full shadow-richblack-50  border-richblack-200 px-4 py-3 bg-transparent shadow-sm">
            <Link to="/signup">
              <button className="flex items-center gap-2 mx-auto ">
                Become an Instructor <FaArrowRight />
              </button>
            </Link>
          </div>
          <div className="text-center font-semibold text-4xl ">
            Empower Your Future with
            <HighlightText text={" Coding Skills"}></HighlightText>
          </div>
          <p className="w-[60%] text-center text-lg font-bold text-richblack-300">
            With our online coding courses,you can learn at your own pace, from
            anywhere in the world, and get access to a wealth of resources,
            including hands-on projects, quizzes, and personalized feedback from
            instructors.
          </p>
          <div className=" flex lg:flex-row md:flex-row flex-col gap-4">
            <CTAButton active={true} linkto={"/signup"}>
              Learn more
            </CTAButton>
            <CTAButton>Book a Demo</CTAButton>
          </div>
          <div className=" w-[75%]   drop-shadow-2xl shadow-2xl  shadow-blue-100  ">
            <div className=" w-[100%] bg-white  rounded-md ">
              <video
                src={bannerVideo}
                muted
                autoPlay={true}
                loop
                className="w-fit -translate-x-3 -translate-y-3 rounded-md"
              ></video>
            </div>
          </div>
        </div>

        {/* code section 1 */}
        <div className="w-[75%]  mt-20">
          <CodeBlocks
            heading1={{
              before: "Unlock Your",
              after: "with our online courses",
              highlighted: " coding potential ",
            }}
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experiance in coding"
            }
            direction={"lg:flex-row"}
            btn1={{ active: true, linkto: "/signup", text: "try it yourself" }}
            btn2={{ active: false, linkto: "/signup", text: "learn more" }}
            bgGradient={<div className="codeblock1 absolute "></div>}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="/one">One</a>\n</nav>\n</body>`}
          ></CodeBlocks>

          <CodeBlocks
            heading1={{
              before: "Unlock Your",
              after: "with our online courses",
              highlighted: " coding potential ",
            }}
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experiance in coding"
            }
            direction={"lg:flex-row-reverse"}
            btn1={{ active: true, linkto: "/signup", text: "try it your self" }}
            btn2={{ active: false, linkto: "/signup", text: "learn more" }}
            bgGradient={<div className="codeblock2 absolute "></div>}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="/one">One</a>\n</nav>\n</body>`}
          ></CodeBlocks>
        </div>
      </section>
      {/* section 2 */}
      <section className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-maxContent flex-col flex items-center justify-between gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex gap-7 flex-col md:flex-row text-white">
              <CTAButton active={true} linkto={"/singup"}>
                <div className="flex gap-2 items-center">
                  Explore all catalog {<FaArrowRight />}
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn more
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
          <div className="flex gap-10 my-20">
            <div className="w-[50%] text-4xl font-inter font-bold">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand"} />
            </div>
            <div className="w-[50%] flex flex-col gap-10 ">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <div className="w-fit">
                <CTAButton active={true} linkto={"/signup"}>
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>
          <TimeLineSection />
          <LearningLanguageSection />
        </div>
      </section>
      {/* section 3 */}
      <section className="w-11/12 mx-auto max-w-maxContent flex flex-col justify-between gap-10 bg-richblack-900 text-white">
        <InstructorSection />
        <h2 className="text-center  text-4xl font-semibold mt-10">
          Review from other learners
        </h2>
        <div className="h-[40vh]"></div>
        {/* review slider */}
      </section>
      {/* footer */}

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
