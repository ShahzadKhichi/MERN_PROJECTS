import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Common/Navbar";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Error from "./Pages/Error";
import ForgetPassword from "./Pages/ForgetPassword";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import OpenRoute from "./Components/Core/auth/OpenRoute";
import { useEffect, useState } from "react";
import UpdatePassword from "./Pages/UpdatePassword";
import VerifyEmail from "./Pages/VerifyEmail";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Dashboard from "./Pages/Dashboard";

function App() {
  const loading = useSelector((store) => store.auth.loading);
  const [toastId, setToastId] = useState(null);

  useEffect(() => {
    if (loading && !toastId) {
      setToastId(toast.loading("loading..."));
    } else if (toastId && !loading) {
      toast.dismiss(toastId);
      setToastId(null);
    }
  }, [loading]);
  return (
    <div className="bg-richblack-900 min-h-[100vh] ">
      <div
        className={` bg-richblack-900 ${
          loading ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <OpenRoute>
                <Login />
              </OpenRoute>
            }
          />
          <Route
            path="/otp"
            element={
              <OpenRoute>
                <VerifyEmail />
              </OpenRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <OpenRoute>
                <Signup />
              </OpenRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/forget-password"
            element={
              <OpenRoute>
                <ForgetPassword />
              </OpenRoute>
            }
          />
          <Route
            path="/update-password/:token"
            element={
              <OpenRoute>
                <UpdatePassword />
              </OpenRoute>
            }
          />

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/dashboard/profile" element={<Dashboard />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
