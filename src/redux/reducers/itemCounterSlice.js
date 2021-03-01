import { createSlice } from "@reduxjs/toolkit";

export const itemCounterSlice = createSlice({
  name: "itemCounter",
  initialState: {},
  reducers: {
    increment: (state, action) => {
      const {id} = action.payload;
      state[id] = state[id] ? state[id] + 1 : 1;
    },
    decrement: (state, action) => {
      const { id } = action.payload;
      state[id] = state[id] ? state[id] - 1 : 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = itemCounterSlice.actions;

export default itemCounterSlice.reducer;
