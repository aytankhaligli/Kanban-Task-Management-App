import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
  currentBoard: null,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = !state.active;
    },
    setCurrentBoard: (state, action) => {
      state.currentTask = action.payload;
    },
  },
});

export const { setActive } = boardSlice.actions;
export default boardSlice.reducer;
