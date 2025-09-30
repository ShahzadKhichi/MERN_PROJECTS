import React from "react";
import Template from "../Components/Core/auth/Template";
import image from "../assets/Images/signup.webp";
import SignupForm from "../Components/Core/auth/SignupForm";

const Signup = () => {
  return <Template image={image} Form={SignupForm} />;
};

export default Signup;
