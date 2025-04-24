// src/redux/tasksSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const DB_URL =
  "https://taskmanager-5ec39-default-rtdb.asia-southeast1.firebasedatabase.app/";

// Thunks for async actions
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async (uid) => {
  const res = await axios.get(`${DB_URL}/tasks/${uid}.json`);
  return res.data;
});

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async ({ uid, task }) => {
    await axios.post(`${DB_URL}/tasks/${uid}.json`, task);
    return { uid };
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { list: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        const data = action.payload;
        state.list = data
          ? Object.entries(data).map(([id, task]) => ({ id, ...task }))
          : [];
        state.status = "succeeded";
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.status = "added";
      });
  },
});

export default tasksSlice.reducer;
