import { authEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { toast } from "react-hot-toast";
import {
  setSignupData,
  setToken,
} from "../../../../Study-Notion-master/src/slices/authSlice";
import { setUser } from "../../../../Study-Notion-master/src/slices/profileSlice";

const { LOGIN_API, SIGNUP_API, SENDOTP_API } = authEndpoints;

export const login = async (data, navigate, dispatch) => {
  const toastId = toast.loading("loading...");
  try {
    if (!data) {
      toast.console.warn();
      ("All fields are requried");
    } else {
      const res = await apiConnector("POST", LOGIN_API, data);
      console.log(res.status);
      if (res.status == 200) {
        toast.success("login succesfull");
        const data = res.data;

        dispatch(setToken(data.user.token));
        dispatch(setUser(data.user));

        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", JSON.stringify(data.user.token));

        navigate("/");
      }
    }
  } catch (error) {
    console.log("failed to login");

    toast.error("falied to login", error?.message);
  }
  toast.dismiss(toastId);
};

export const sendOTP = async (data, navigate, dispatch) => {
  const toastId = toast.loading("loading...");
  try {
    if (!data.email) {
      toast.warn("all fields are required");
    } else {
      const res = await apiConnector("POST", SENDOTP_API, {
        email: data?.email,
      });

      if (res.status == 200 || res.status == 201) {
        dispatch(setSignupData(data));
        toast.success("OTP sent successfully");
        navigate("/auth/otp");
      }
    }
  } catch (error) {
    console.log("error in sending otop", error);
    toast.error("failed to send otp ");
  }
  toast.dismiss(toastId);
};
