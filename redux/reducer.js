import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPlan:null
};


const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    selectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
  },
});

export const { selectedPlan } = planSlice.actions;
export default planSlice.reducer;