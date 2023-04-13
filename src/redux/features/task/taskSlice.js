import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTask: null,
};

export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    setCurrentTask: (state, action) => {
      state.currentTask = action.payload;
    },
  },
});

export const { setCurrentTask } = taskSlice.actions;

export default taskSlice.reducer;
