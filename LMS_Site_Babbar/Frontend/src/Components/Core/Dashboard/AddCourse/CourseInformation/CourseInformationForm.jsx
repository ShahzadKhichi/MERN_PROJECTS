import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseCategories } from "../../../../../services/APIS/courseDetailsAPI";

const CourseInformationForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const [courseCategories, setCategories] = useState([]);

  const { course, editCourse } = useSelector(({ course }) => course);

  async function fetchCatgories() {
    try {
      const res = await fetchCourseCategories(dispatch);
      console.log(res);
    } catch (error) {
      console.log("error in fetching categories", error);
    }
  }

  useEffect(() => {
    fetchCatgories();
  }, []);

  return <div>CourseInformationForm</div>;
};

export default CourseInformationForm;
