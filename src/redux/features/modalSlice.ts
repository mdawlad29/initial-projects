import { createSlice } from "@reduxjs/toolkit";

interface IModal {
  toggleDepositProcess: boolean;
}

const initialState: any = {
  toggleDepositProcess: false,
} as IModal;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setToggleOpen: (state: any) => {
      state.toggleDepositProcess = false;
    },
  },
});

export const { setToggleOpen } = modalSlice.actions;
export default modalSlice.reducer;
