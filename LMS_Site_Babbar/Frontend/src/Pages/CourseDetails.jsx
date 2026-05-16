import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseDetails } from "../services/APIS/courseDetailsAPI";
import { buyCourse } from "../services/APIS/studentFeaturesAPI";
import { BiInfoCircle } from "react-icons/bi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { IoVideocamOutline } from "react-icons/io5";
import RatingStars from "../Components/Common/RatingStars";
import GetAvgRating from "../Components/Common/GetAvgRating";
import { addToCart } from "../slices/cart.slice";
import Footer from "../Components/Common/Footer";
import { setLoading } from "../slices/auth.slice";

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const [response, setResponse] = useState(null);
  const [avgReviewCount, setAvgReviewCount] = useState(0);
  const [totalLectures, setTotalLectures] = useState(0);
  const [isActive, setIsActive] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      dispatch(setLoading(true));
      const res = await fetchCourseDetails(courseId, dispatch);
      setResponse(res);
      dispatch(setLoading(false));
    };
    getDetails();
  }, [courseId]);

  useEffect(() => {
    if (response?.data) {
      const count = GetAvgRating(
        response.data.courseDetails?.ratingAndReviews
      );
      setAvgReviewCount(count);

      let lectures = 0;
      response.data.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection?.length || 0;
      });
      setTotalLectures(lectures);
    }
  }, [response]);

  const handleActive = (id) => {
    setIsActive(
      !isActive.includes(id)
        ? isActive.concat([id])
        : isActive.filter((e) => e !== id)
    );
  };

  const handleBuyCourse = () => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
    navigate("/login");
  };

  const handleAddToCart = () => {
    if (user && user?.accountType === "Instructor") {
      return;
    }
    if (token) {
      dispatch(addToCart(response?.data?.courseDetails));
      return;
    }
    navigate("/login");
  };

  if (!response?.data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-50"></div>
      </div>
    );
  }

  const {
    courseName,
    courseDescription,
    thumbnail,
    price,
    whatYouWillLearn,
    courseContent,
    ratingAndReviews,
    instructor,
    studentsEnroled,
    tag,
    instructions,
  } = response.data.courseDetails;

  return (
    <>
      <div className="relative w-full bg-richblack-800">
        {/* Hero */}
        <div className="mx-auto box-content px-4 lg:w-[1260px] 2xl:relative">
          <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
            {/* Mobile thumbnail */}
            <div className="relative block max-h-[30rem] lg:hidden">
              <img
                src={thumbnail}
                alt={courseName}
                className="aspect-auto w-full rounded-lg"
              />
            </div>

            <div className="z-30 my-5 flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5">
              <p className="text-4xl font-bold text-richblack-5 sm:text-[42px]">
                {courseName}
              </p>
              <p className="text-richblack-200">{courseDescription}</p>
              <div className="text-md flex flex-wrap items-center gap-2">
                <span className="text-yellow-25">{avgReviewCount}</span>
                <RatingStars Review_Count={avgReviewCount} Star_Size={24} />
                <span>{`(${ratingAndReviews?.length} reviews)`}</span>
                <span>{`${studentsEnroled?.length} students enrolled`}</span>
              </div>
              <p>
                Created By{" "}
                <span className="text-yellow-25">
                  {instructor?.firstName} {instructor?.lastName}
                </span>
              </p>
              <div className="flex flex-wrap gap-5 text-lg">
                <p className="flex items-center gap-2">
                  <BiInfoCircle /> Created at{" "}
                  {new Date(
                    response.data.courseDetails?.createdAt
                  ).toLocaleDateString()}
                </p>
                <p className="flex items-center gap-2">
                  <HiOutlineGlobeAlt /> English
                </p>
              </div>
            </div>

            {/* Price Card (mobile) */}
            <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
              <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
                Rs. {price}
              </p>
              <button
                className="yellowButton w-full rounded-lg py-3 font-semibold"
                onClick={handleBuyCourse}
              >
                Buy Now
              </button>
              <button
                className="blackButton w-full rounded-lg py-3 font-semibold"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Desktop Price Card */}
          <div className="right-[1rem] top-[60px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute lg:block">
            <div className="flex flex-col gap-4 rounded-md bg-richblack-700 p-4 text-richblack-5">
              <img
                src={thumbnail}
                alt={courseName}
                className="max-h-[300px] min-h-[180px] w-[400px] overflow-hidden rounded-2xl object-cover md:max-w-full"
              />
              <div className="px-4">
                <div className="space-x-3 pb-4 text-3xl font-semibold">
                  Rs. {price}
                </div>
                <div className="flex flex-col gap-4">
                  <button
                    className="bg-yellow-50 text-richblack-900 rounded-lg py-3 font-semibold hover:scale-95 transition-all duration-200"
                    onClick={handleBuyCourse}
                  >
                    Buy Now
                  </button>
                  <button
                    className="bg-richblack-800 text-richblack-5 border border-richblack-600 rounded-lg py-3 font-semibold hover:scale-95 transition-all duration-200"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
                <p className="pb-3 pt-6 text-center text-sm text-richblack-25">
                  30-Day Money-Back Guarantee
                </p>
                <div>
                  <p className="my-2 text-xl font-semibold">
                    This Course Includes:
                  </p>
                  <div className="flex flex-col gap-3 text-sm text-caribbeangreen-100">
                    {instructions?.map((item, i) => (
                      <p className="flex gap-2" key={i}>
                        <span>✓</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="mx-auto box-content px-4 text-start text-richblack-5 lg:w-[1260px]">
        <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
          {/* What you'll learn */}
          <div className="my-8 border border-richblack-600 p-8">
            <p className="text-3xl font-semibold">What you'll learn</p>
            <div className="mt-5 text-richblack-200 whitespace-pre-line">
              {whatYouWillLearn}
            </div>
          </div>

          {/* Course Content */}
          <div className="max-w-[830px]">
            <div className="flex flex-col gap-3">
              <p className="text-[28px] font-semibold">Course Content</p>
              <div className="flex flex-wrap justify-between gap-2">
                <div className="flex gap-2 text-richblack-200">
                  <span>{courseContent?.length} section(s)</span>
                  <span>{totalLectures} lecture(s)</span>
                  <span>{response?.data?.totalDuration} total length</span>
                </div>
                <button
                  className="text-yellow-25"
                  onClick={() => setIsActive([])}
                >
                  Collapse all sections
                </button>
              </div>
            </div>

            {/* Sections Accordion */}
            <div className="py-4">
              {courseContent?.map((section, index) => (
                <div
                  className="overflow-hidden border border-solid border-richblack-600 bg-richblack-700 text-richblack-5"
                  key={index}
                >
                  <div
                    className="flex cursor-pointer items-start justify-between bg-opacity-20 px-7 py-6 transition-[0.3s]"
                    onClick={() => handleActive(section._id)}
                  >
                    <div className="flex items-center gap-2">
                      <i
                        className={
                          isActive.includes(section._id)
                            ? "rotate-0"
                            : "-rotate-90"
                        }
                      >
                        ▼
                      </i>
                      <p>{section?.sectionName}</p>
                    </div>
                    <div className="space-x-4">
                      <span className="text-yellow-25">
                        {section?.subSection?.length || 0} lecture(s)
                      </span>
                    </div>
                  </div>
                  {isActive.includes(section._id) && (
                    <div className="transition-[height] duration-[0.35s] ease-[ease]">
                      {section?.subSection?.map((sub, i) => (
                        <div
                          className="flex items-center justify-between border-t border-richblack-600 px-7 py-4"
                          key={i}
                        >
                          <div className="flex items-center gap-2">
                            <IoVideocamOutline />
                            <p>{sub?.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Author */}
            <div className="mb-12 py-4">
              <p className="text-[28px] font-semibold">Author</p>
              <div className="flex items-center gap-4 py-4">
                <img
                  src={
                    instructor?.image ||
                    `https://api.dicebear.com/5.x/initials/svg?seed=${instructor?.firstName} ${instructor?.lastName}`
                  }
                  alt="Author"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <p className="text-lg">
                  {instructor?.firstName} {instructor?.lastName}
                </p>
              </div>
              <p className="text-richblack-50">
                {instructor?.additionalDetails?.about}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetails;
