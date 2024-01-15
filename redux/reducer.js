import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test:"test"
};

const myReducer = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {
    // Ajout actions et reducers ici
  },
});

export const { actions } = myReducer;
export default myReducer.reducer;