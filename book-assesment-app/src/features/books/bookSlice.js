import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetch books by page, page=1,2...
export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async ({ query, page }) => {
    const q = query ? query : "programming";
    const res = await axios.get(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(
        q
      )}&page=${page}`
    );
    return { docs: res.data.docs, numFound: res.data.numFound };
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    docs: [],
    total: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.docs = action.payload.docs;
        state.total = action.payload.numFound;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default bookSlice.reducer;
