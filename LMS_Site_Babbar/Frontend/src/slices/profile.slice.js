import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: intialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload;
    },
  },
});

export const { setUser } = profileSlice.actions;

export default profileSlice.reducer;
