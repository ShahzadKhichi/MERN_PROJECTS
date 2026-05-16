import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { verifyPayment } from "../services/APIS/studentFeaturesAPI";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const coursesString = searchParams.get("courses");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (sessionId && coursesString && token) {
      const courses = JSON.parse(decodeURIComponent(coursesString));
      verifyPayment({ session_id: sessionId, courses }, token, navigate, dispatch);
    }
  }, [sessionId, coursesString, token, navigate, dispatch]);

  return (
    <div className="flex h-screen items-center justify-center bg-richblack-900">
      <div className="flex flex-col items-center p-8 bg-richblack-800 rounded-xl shadow-xl">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-caribbeangreen-200 mb-6"></div>
        <h2 className="text-2xl font-bold text-richblack-5 mb-2">Verifying Payment...</h2>
        <p className="text-richblack-200 text-center">Please wait while we confirm your enrollment.</p>
        <p className="text-yellow-25 text-sm mt-4">Do not close this page.</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
