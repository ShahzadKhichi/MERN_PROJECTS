import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Common/Navbar";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Error from "./Pages/Error";
import ForgetPassword from "./Pages/ForgetPassword";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import OpenRoute from "./Components/Core/auth/OpenRoute";
import { useEffect, useState } from "react";
import UpdatePassword from "./Pages/UpdatePassword";
import VerifyEmail from "./Pages/VerifyEmail";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Components/Core/auth/PrivateRoute";
import Profile from "./Components/Core/Dashboard/Profile";
import Settings from "./Components/Core/Dashboard/Settings";
import EnrolledCoursed from "./Components/Core/Dashboard/EnrolledCoursed";
import Cart from "./Components/Core/Dashboard/Cart/index";
import InstructorDashboard from "./Components/Core/Dashboard/InstructorDashboard";
import MyCourses from "./Components/Core/Dashboard/MyCourses";
import AddCourse from "./Components/Core/Dashboard/AddCourse/index";
import { getUserDetails } from "./services/APIS/profile";
import { setLoading } from "./slices/auth.slice";

function App() {
  const loading = useSelector((store) => store.auth.loading);
  const [toastId, setToastId] = useState(null);
  const user = useSelector(({ profile }) => profile.user);
  const token = useSelector(({ auth }) => auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!user && token) {
    getUserDetails(token, navigate, dispatch)
      .then(() => {})
      .catch(() => {});
    dispatch(setLoading(false));
  }
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
          <Route
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route
              path="/dashboard/enrolled-courses"
              element={<EnrolledCoursed />}
            />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/cart" element={<Cart />} />

            <Route
              path="/dashboard/instructor"
              element={<InstructorDashboard />}
            />
            <Route path="/dashboard/my-courses" element={<MyCourses />} />
            <Route path="/dashboard/add-course" element={<AddCourse />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
