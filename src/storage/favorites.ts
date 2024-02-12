/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pet } from '../types/Pet';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [] as Pet[],
  reducers: {
    addFav: (state, action: PayloadAction<Pet>) => {
      state.push(action.payload);
    },
    removeFav: (state, action: PayloadAction<Pet>) => {
      return state.filter((pet) => pet.id !== action.payload.id);
    },
    clearFav: () => [],
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions;
export const { addFav, removeFav } = favoritesSlice.actions;
