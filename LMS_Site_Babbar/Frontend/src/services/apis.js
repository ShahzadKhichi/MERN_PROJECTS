const BASE_URL = import.meta.env.VITE_BASE_URL;

//categories endpoints
export const categories = {
  CATEGORIES_API: BASE_URL + "/course/getAllCategory",
};

//auth endpoints
export const authEndpoints = {
  LOGIN_API: BASE_URL + "/user/login",
  SIGNUP_API: BASE_URL + "/user/signup",
  SEND_OTP_API: BASE_URL + "/user/otp",
  SEND_PASSWORD_RESET_TOKEN_API: BASE_URL + "/user/send-token",
  RESET_PASSWORD_API: BASE_URL + "/user/reset-password",
  LOGOUT_API: BASE_URL + "/user/logout",
};

//profile endpoints

export const profileEndpoints = {
  UPDATE_PROFILE: BASE_URL + "/profile/update-profile",
  UPDATE_PROFILE_PICTURE: BASE_URL + "/profile/update-profile-picture",
  GET_USER_DETAILS: BASE_URL + "/profile/get-user-details",
  UPDATE_PASSWORD: BASE_URL + "/profile/update-password",
  DELETE_ACCOUNT: BASE_URL + "/profile/delete-account",
  GET_USER_ENROLLED_COURSES: BASE_URL + "/profile/enrolled-courses",
};

// Course Endpoints

export const courseEndpoints = {
  COURSE_DETAILS_API: BASE_URL + "",
  COURSE_CATEGORIES_API: BASE_URL + "",
  GET_ALL_COURSE_API: BASE_URL + "",
  CREATE_COURSE_API: BASE_URL + "",
  EDIT_COURSE_API: BASE_URL + "",
  CREATE_SECTION_API: BASE_URL + "",
  CREATE_SUBSECTION_API: BASE_URL + "",
  UPDATE_SECTION_API: BASE_URL + "",
  UPDATE_SUBSECTION_API: BASE_URL + "",
  DELETE_SECTION_API: BASE_URL + "",
  DELETE_SUBSECTION_API: BASE_URL + "",
  GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "",
  DELETE_COURSE_API: BASE_URL + "",
  GET_FULL_COURSE_DETAILS_AUTHENTICATED: BASE_URL + "",
  CREATE_RATING_API: BASE_URL + "",
  LECTURE_COMPLETION_API: BASE_URL + "",
};
