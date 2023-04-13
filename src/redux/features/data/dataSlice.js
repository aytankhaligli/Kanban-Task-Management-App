import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: false,
};

export const getData = createAsyncThunk("data / getData", async () => {
  try {
    const res = await fetch("../src/data/data.json");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = dataSlice.actions;
export default dataSlice.reducer;
