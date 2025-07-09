import React, { use } from "react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectRoute = ({ children, user, redirect = "/login" }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(redirect);
    }
  }, []);
  return children ? children : <Outlet />;
};

export default ProtectRoute;
