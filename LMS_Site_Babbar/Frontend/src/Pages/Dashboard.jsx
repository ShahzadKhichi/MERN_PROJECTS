import React, { useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../Components/Core/Dashboard/SideBar";
import ConfirmationModal from "../Components/Common/ConfirmationModal";
import useOnClickOutside from "../Hooks/useOnClickOutside";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/APIS/auth";
const Dashboard = () => {
  const [cm, setCm] = useState(false);
  const cmRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(({ auth }) => auth.token);

  const logoutHandler = async () => {
    await logout(dispatch, navigate, token);
  };
  useOnClickOutside(cmRef, () => setCm(false));

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-[300px]  text-white ">
        <SideBar setLogoutCm={setCm} />
      </div>
      <div className="w-full relative">
        <div ref={cmRef} className={`absolute top-[30%] -left-16 `}>
          <ConfirmationModal
            text={"You will be logged out of your account."}
            visible={cm}
            handler_2={() => setCm(false)}
            handler_1={logoutHandler}
            btnText={"Logout"}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
