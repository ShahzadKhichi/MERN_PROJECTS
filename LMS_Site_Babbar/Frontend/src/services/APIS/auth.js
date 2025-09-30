import { authEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { setLoading, setSignupData, setToken } from "../../slices/auth.slice";
import { setUser } from "../../../../Study-Notion-master/src/slices/profileSlice";
import toast from "react-hot-toast";

const {
  LOGIN_API,
  SIGNUP_API,
  SEND_OTP_API,
  SEND_PASSWORD_RESET_TOKEN_API,
  RESET_PASSWORD_API,
  LOGOUT_API,
} = authEndpoints;

export const login = async (data, navigate, dispatch) => {
  dispatch(setLoading(true));
  try {
    if (!data) {
      toast.error("All fields are requried");
    } else {
      const res = await apiConnector("POST", LOGIN_API, data);
      console.log(res.status);
      if (res.status == 200) {
        toast.success("login succesfull");
        const data = res.data;

        dispatch(setToken(data.token));
        dispatch(setUser(data.user));

        localStorage.setItem("token", JSON.stringify(data.token));

        navigate("/dashboard/profile");
      }
    }
  } catch (error) {
    console.log("failed to login");

    toast.error(error?.response?.data?.message || "falied to login");
  }
  dispatch(setLoading(false));
};

export const sendOTP = async (data, navigate, dispatch) => {
  dispatch(setLoading(true));
  try {
    if (!data.email) {
      toast.error("all fields are required");
    } else {
      const res = await apiConnector("POST", SEND_OTP_API, {
        email: data?.email,
      });

      if (res.status == 200 || res.status == 201) {
        dispatch(setSignupData(data));
        toast.success("OTP sent successfully");
        navigate("/otp");
      }
    }
  } catch (error) {
    console.log("error in sending otop", error);
    toast.error(error?.response?.data?.message || "failed to send otp ");
  }
  dispatch(setLoading(false));
};

export const signup = async (data, navigate, dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await apiConnector("POST", SIGNUP_API, data);
    if (res.status == 201 || res.status == 200) {
      dispatch(setUser(res.data.user));
      dispatch(setToken(res.data.token));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.token));
      toast.success("Signup successfull");
      navigate("/dashboard/profile");
    }
  } catch (error) {
    toast.error(error?.response?.data?.message || "failed to verify email");
  }
  dispatch(setLoading(false));
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
    toast.error(error?.response?.data?.message || "Failed to send email");
  }
  dispatch(setLoading(false));
};

export const resetPassword = async (data, dispatch, navigate) => {
  dispatch(setLoading(true));
  try {
    const res = await apiConnector("POST", RESET_PASSWORD_API, data);
    if (res.status == 200 || res.status(201)) {
      toast.success("Password reset successfull");
      navigate("/login");
    }
  } catch (error) {
    console.log();

    toast.error(error?.response?.data?.message || "failed to reset passowrd");
  }
  dispatch(setLoading(false));
};

export const logout = async (dispatch, navigate, token) => {
  dispatch(setLoading(true));
  try {
    const res = await apiConnector(
      "POST",
      LOGOUT_API,
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (res.status === 200 || res.status(201)) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      dispatch(setUser(null));
      dispatch(setToken(null));
      toast.success("Logout successfull");
      navigate("/");
    }
  } catch (error) {
    toast.error(error?.response?.data?.message || "failed to logout");
  }
  dispatch(setLoading(false));
};
