import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
};

const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkMode } = slice.actions;

export default slice;
