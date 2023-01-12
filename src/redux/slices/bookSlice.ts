import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

export interface BookState {
  favourites: string[];
}

const initialState: BookState = {
  favourites: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<string>) => {
      if (!state.favourites.includes(action.payload)) {
        state.favourites.push(action.payload);
      }
    },
    removeFavourite: (state, action: PayloadAction<string>) => {
      state.favourites = state.favourites.filter(fav => fav !== action.payload);
    },
  },
});

export const {addFavourite, removeFavourite} = bookSlice.actions;

export default bookSlice.reducer;
