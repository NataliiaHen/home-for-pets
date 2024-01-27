/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type isModalShowState = {
  isModalShow: boolean;
};

const initialState: isModalShowState = {
  isModalShow: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsModalShow: (state, action: PayloadAction<boolean>) => {
      state.isModalShow = action.payload;
    },
  },
});

export const { setIsModalShow } = modalSlice.actions;

export default modalSlice.reducer;
