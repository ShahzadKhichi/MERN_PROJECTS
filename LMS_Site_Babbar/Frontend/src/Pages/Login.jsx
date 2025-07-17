import React from "react";
import Template from "../Components/Core/auth/Template";
import image from "../assets/Images/login.webp";
import LoginForm from "../Components/Core/auth/LoginForm";

const Login = () => {
  return <Template image={image} Form={LoginForm} />;
};

export default Login;
