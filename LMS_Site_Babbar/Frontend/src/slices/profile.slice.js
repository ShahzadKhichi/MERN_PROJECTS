import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  User: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: intialState,
  reducers: {
    setUser(state, value) {
      state.User = value.payload;
    },
  },
});

export const { setUser } = profileSlice.actions;

export default profileSlice.reducer;
