import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: false,
  },

  reducers: {
    darkMode: (state) => {
      state.dark = true;
      localStorage.setItem("theme", JSON.stringify(state.dark));
    },

    lightMode: (state) => {
      state.dark = false;
      localStorage.setItem("theme", JSON.stringify(state.dark));
    },

    toggleMode: (state) => {
      state.dark = !state.dark;
      localStorage.setItem("theme", JSON.stringify(state.dark));
    },

    setMode: (state, action) => {
      state.dark = action.payload;
    },
  },
});

export const { darkMode, lightMode, toggleMode, setMode } = themeSlice.actions;

export const selectTheme = (state) => state.theme.dark;

export default themeSlice.reducer;
