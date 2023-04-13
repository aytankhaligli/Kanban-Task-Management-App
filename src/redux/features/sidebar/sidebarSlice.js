import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    hideSidebar: (state) => {
      state.value = false;
    },
    showSidebar: (state) => {
      state.value = true;
    },
  },
});

export const { hideSidebar, showSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
