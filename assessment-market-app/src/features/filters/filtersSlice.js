// src/features/filters/filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    category: '',
    priceRange: [0, 1000],
    rating: 0,
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setPriceRange(state, action) {
      state.priceRange = action.payload;
    },
    setRating(state, action) {
      state.rating = action.payload;
    },
  },
});

export const { setSearch, setCategory, setPriceRange, setRating } = filtersSlice.actions;
export default filtersSlice.reducer;
