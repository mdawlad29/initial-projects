import { createSlice } from "@reduxjs/toolkit";

type ICounter = {
  value: number;
};

const initialState = {
  value: 0,
} as ICounter;

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setIncrement: (state) => {
      state.value += 3;
    },

    setDecrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },

    setReset: () => initialState,
  },
});

export const { setIncrement, setDecrement, setReset } = counter.actions;
export default counter.reducer;
