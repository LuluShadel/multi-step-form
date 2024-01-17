import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPlan: null,
  personalinfo: null,
  toggle: false,
  addon: {
    onlineActive: false,
    storageActive: false,
    customizeActive: false,
  },
};

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    selectedPlan: (state, action) => {
      const { name, price } = action.payload;
      // Créer un nouvel objet représentant le nouvel état
      state.selectedPlan = { ...state.selectedPlan, name, price };
    },
    personalinfo: (state,action) => {
      const {lastName, email, phone} = action.payload;
      state.personalinfo={...state.personalinfo,lastName,email,phone}
    },
    toggle : (state,action) => {
      const {isChecked} = action.payload;
state.toggle={...state.toggle,isChecked}
    },
    addon: (state, action) => {
      const { onlineActive, storageActive, customizeActive } = action.payload;
      state.addon = {
        ...state.addon,
        onlineActive: onlineActive !== undefined ? onlineActive : state.addon.onlineActive,
        storageActive: storageActive !== undefined ? storageActive : state.addon.storageActive,
        customizeActive: customizeActive !== undefined ? customizeActive : state.addon.customizeActive,
      };
    },
  },
});

export const { selectedPlan } = planSlice.actions;
export const {personalinfo} = planSlice.actions;
export const {toggle} = planSlice.actions
export const { addon } = planSlice.actions;
export default planSlice.reducer;