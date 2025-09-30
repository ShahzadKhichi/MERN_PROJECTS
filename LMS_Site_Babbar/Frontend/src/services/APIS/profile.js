import { profileEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import { setLoading } from "../../slices/auth.slice";
import toast from "react-hot-toast";
import { setUser } from "../../slices/profile.slice";

const {
  GET_USER_DETAILS,
  DELETE_ACCOUNT,
  UPDATE_PASSWORD,
  GET_USER_ENROLLED_COURSES,
} = profileEndpoints;

export const getUserDetails = async (token, navigate, dispatch) => {
  dispatch(setLoading(true));
  try {
    if (!token) {
      toast.error("please login first");
      navigate("/");
    }

    const res = await apiConnector(
      "GET",
      GET_USER_DETAILS,
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (res.status === 200 || res.status(201)) {
      dispatch(setUser(res?.data?.user));

      return res.data;
    }
  } catch (error) {
    toast.error(error?.response?.data?.message || "failed to get user details");
  } finally {
    dispatch(setLoading(false));
  }
};

export const updatePassword = async (token, data, navigate, dispatch) => {
  dispatch(setLoading(true));
  try {
    if (!token) {
      toast.error("please login first");
      navigate("/");
    }

    const res = await apiConnector("PUT", UPDATE_PASSWORD, data, {
      Authorization: `Bearer ${token}`,
    });

    if (res.status === 200 || res.status(201)) {
      toast.success("password upated successfully");
    }
  } catch (error) {
    toast.error(error?.response?.data?.message || "failed to update password");
  } finally {
    dispatch(setLoading(false));
  }
};

export const getEnrolledCourses = async (token, navigate, dispatch) => {
  dispatch(setLoading(true));
  try {
    if (!token) {
      toast.error("Please login first");
      navigate("/");
    }

    const res = await apiConnector(
      "GET",
      GET_USER_ENROLLED_COURSES,
      {},
      {
        Authorization: `Bearer ${token}`,
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);

    toast.error("Failed to get coureses");
  } finally {
    dispatch(setLoading(false));
  }
};
