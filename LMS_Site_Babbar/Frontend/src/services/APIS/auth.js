import { authEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { setLoading, setSignupData, setToken } from "../../slices/auth.slice";
import { setUser } from "../../../../Study-Notion-master/src/slices/profileSlice";
import toast from "react-hot-toast";

const { LOGIN_API, SIGNUP_API, SEND_OTP_API, SEND_PASSWORD_RESET_TOKEN_API } =
  authEndpoints;

export const login = async (data, navigate, dispatch) => {
  dispatch(setLoading(true));
  try {
    if (!data) {
      toast.warn("All fields are requried");
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
  dispatch(setLoading(false));
};

export const sendOTP = async (data, navigate, dispatch) => {
  const toastId = toast.loading("loading...");
  try {
    if (!data.email) {
      toast.warn("all fields are required");
    } else {
      const res = await apiConnector("POST", SEND_OTP_API, {
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

export const sendResetToken = async (email, dispatch, setEmailSent) => {
  dispatch(setLoading(true));
  try {
    const res = await apiConnector("POST", SEND_PASSWORD_RESET_TOKEN_API, {
      email,
    });
    if (res.status == 200 || res.status === 201) {
      toast.success("Email sent");
      setEmailSent(true);
    }
  } catch (error) {
    toast.error(error.message || "Failed to send email");
  }
  dispatch(setLoading(false));
};
