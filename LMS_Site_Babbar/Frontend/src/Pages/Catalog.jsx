import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiConnector } from "../services/apiConnector";
import { catalogData, categories } from "../services/apis";
import CourseSlider from "../Components/Core/Catalog/CourseSlider";
import CourseCard from "../Components/Core/Catalog/CourseCard";
import { useDispatch } from "react-redux";
import { setLoading } from "../slices/auth.slice";
import Footer from "../Components/Common/Footer";

const Catalog = () => {
  const { catalogName } = useParams();
  const [catalogPageData, setCatalogPageData] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();

  // Fetch all categories and find the matching one
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        const category = res?.data?.Categories?.find(
          (ct) =>
            ct.name.split(" ").join("-").toLowerCase() === catalogName
        );
        if (category) {
          setCategoryId(category._id);
        }
      } catch (error) {
        console.log("Could not fetch categories", error);
      }
    };
    getCategories();
  }, [catalogName]);

  // Fetch category page details
  useEffect(() => {
    const getCategoryDetails = async () => {
      if (!categoryId) return;
      dispatch(setLoading(true));
      try {
        const res = await apiConnector(
          "POST",
          catalogData.CATALOGPAGEDATA_API,
          { categoryId }
        );
        setCatalogPageData(res?.data?.data);
      } catch (error) {
        console.log(error);
      }
      dispatch(setLoading(false));
    };
    getCategoryDetails();
  }, [categoryId]);

  return (
    <>
      {/* Hero Section */}
      <div className="box-content bg-richblack-800 px-4">
        <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent">
          <p className="text-sm text-richblack-300">
            Home / Catalog /{" "}
            <span className="text-yellow-25">
              {catalogPageData?.selectedCategory?.name || catalogName}
            </span>
          </p>
          <p className="text-3xl text-richblack-5">
            {catalogPageData?.selectedCategory?.name}
          </p>
          <p className="max-w-[870px] text-richblack-200">
            {catalogPageData?.selectedCategory?.description}
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="text-2xl font-bold text-richblack-5 lg:text-4xl">
          Courses to get you started
        </div>
        <div className="my-4 flex border-b border-b-richblack-600 text-sm">
          <p
            className={`px-4 py-2 cursor-pointer ${
              active === 1
                ? "border-b-2 border-b-yellow-25 text-yellow-25"
                : "text-richblack-50"
            }`}
            onClick={() => setActive(1)}
          >
            Most Popular
          </p>
          <p
            className={`px-4 py-2 cursor-pointer ${
              active === 2
                ? "border-b-2 border-b-yellow-25 text-yellow-25"
                : "text-richblack-50"
            }`}
            onClick={() => setActive(2)}
          >
            New
          </p>
        </div>
        <div>
          <CourseSlider
            courses={catalogPageData?.selectedCategory?.courses}
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="text-2xl font-bold text-richblack-5 lg:text-4xl">
          Top courses in{" "}
          {catalogPageData?.differentCategory?.name}
        </div>
        <div className="py-8">
          <CourseSlider
            courses={catalogPageData?.differentCategory?.courses}
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="text-2xl font-bold text-richblack-5 lg:text-4xl">
          Frequently Bought
        </div>
        <div className="py-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {catalogPageData?.mostSellingCourses
              ?.slice(0, 4)
              .map((course, i) => (
                <CourseCard course={course} key={i} Height={"h-[400px]"} />
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Catalog;
