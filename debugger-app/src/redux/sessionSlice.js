// redux/sessionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recruiterName: "",
  sessionActive: false,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    startSession: (state, action) => {
      state.recruiterName = action.payload;
      state.sessionActive = true;
    },
    endSession: (state) => {
      state.recruiterName = "";
      state.sessionActive = false;
    },
  },
});

export const { startSession, endSession } = sessionSlice.actions;
export default sessionSlice.reducer;
