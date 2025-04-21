import { createSlice } from "@reduxjs/toolkit";

const logsSlice = createSlice({
  name: "logs",
  initialState: {
    allLogs: [],
    filteredLogs: [],
  },
  reducers: {
    setLogs: (state, action) => {
      state.allLogs = action.payload;
      state.filteredLogs = action.payload;
    },
    filterLogs: (state, action) => {
      state.filteredLogs = action.payload;
    },
  },
});

export const { setLogs, filterLogs } = logsSlice.actions;
export default logsSlice.reducer;
