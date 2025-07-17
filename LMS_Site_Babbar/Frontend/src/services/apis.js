const BASE_URL = import.meta.env.VITE_BASE_URL;

export const categories = {
  CATEGORIES_API: BASE_URL + "/course/getAllCategory",
};

export const authEndpoints = {
  LOGIN_API: BASE_URL + "/user/login",
  SIGNUP_API: BASE_URL + "/user/signup",
  SENDOTP_API: BASE_URL + "/user/otp",
};
