import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

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

  async function fetchCatgories() {}

  return <div>CourseInformationForm</div>;
};

export default CourseInformationForm;
