import { createSlice } from "@reduxjs/toolkit";

export const authToken = createSlice({
  name: "authToken",
  initialState: {
    token: sessionStorage.getItem("token"),
    uid: "fake-uid",
  },
  reducers: {
    setAuthValues: (state, action) => {
      console.log(action.payload);
      sessionStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.uid = action.payload.data.uid;
      return state;
    },
  },
});

export const { setAuthValues } = authToken.actions;

export default authToken.reducer;
