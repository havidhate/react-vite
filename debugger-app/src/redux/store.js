// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import logsReducer from "./logsSlice";
import sessionReducer from "./sessionSlice";

const store = configureStore({
  reducer: {
    logs: logsReducer,
    session: sessionReducer,
  },
});

export default store;
