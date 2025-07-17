import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OpenRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = useSelector(({ auth }) => auth.token);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);
  {
    return !token ? <>{children}</> : <></>;
  }
};

export default OpenRoute;
