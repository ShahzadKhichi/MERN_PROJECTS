import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
  signupData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: intialState,
  reducers: {
    setToken(state, value) {
      state.token = value.payload;
    },
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
