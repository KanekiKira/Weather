// weatherReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    updateWeatherStart(state) {
      state.loading = true;
      state.error = null;
      state.data = null;
    },
    updateWeatherSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    updateWeatherFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { updateWeatherStart, updateWeatherSuccess, updateWeatherFailure } = weatherSlice.actions;

export default weatherSlice.reducer;
