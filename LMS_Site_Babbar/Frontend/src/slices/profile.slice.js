import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  User: localStorage.getItem("User")
    ? JSON.parse(localStorage.getItem("User"))
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
