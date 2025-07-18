const BASE_URL = import.meta.env.VITE_BASE_URL;

export const categories = {
  CATEGORIES_API: BASE_URL + "/course/getAllCategory",
};

export const authEndpoints = {
  LOGIN_API: BASE_URL + "/user/login",
  SIGNUP_API: BASE_URL + "/user/signup",
  SEND_OTP_API: BASE_URL + "/user/otp",
  SEND_PASSWORD_RESET_TOKEN_API: BASE_URL + "/user/send-token",
  RESET_PASSWORD_API: BASE_URL + "/user/reset-password",
  LOGOUT_API: BASE_URL + "/user/logout",
};
