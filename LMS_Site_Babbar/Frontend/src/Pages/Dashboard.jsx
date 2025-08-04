import React, { useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../Components/Core/Dashboard/SideBar";
import ConfirmationModal from "../Components/Core/Dashboard/ConfirmationModal";
import useOnClickOutside from "../Hooks/useOnClickOutside";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/APIS/auth";
const Dashboard = () => {
  const [cm, setCm] = useState(false);
  const cmRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(({ auth }) => auth.token);
  console.log(token);

  const logoutHandler = async () => {
    await logout(dispatch, navigate, token);
  };
  useOnClickOutside(cmRef, () => setCm(false));

  return (
    <div className="flex w-full h-screen">
      <div className="w-[300px] text-white ">
        <SideBar setLogoutCm={setCm} />
      </div>
      <div className="w-full relative">
        <div ref={cmRef} className={`absolute top-[30%] -left-16 `}>
          <ConfirmationModal
            text={"Are you sure to logout ? "}
            visible={cm}
            handler_1={() => setCm(false)}
            handler_2={logoutHandler}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
