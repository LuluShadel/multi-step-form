import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPlan: null,
  personalinfo: null,
  toggle: false,
  addon: [],
};

const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    selectedPlan: (state, action) => {
      const { name, price } = action.payload;
      // Mettre à jour la propriété selectedPlan avec la nouvelle valeur
      state.selectedPlan = { name, price };
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
      // Vérifier si l'action contient un tableau d'addons
      if (Array.isArray(action.payload)) {
        // Réinitialiser les addons avec le tableau fourni
        state.addon = action.payload;
      } else {
        // Gérer l'ajout d'un addon comme avant
        const { name, price, active } = action.payload;

        if (active) {
          state.addon.push({ name, price });
        } else {
          state.addon = state.addon.filter(addon => addon.name !== name);
        }
      }
    },
  },
});

export const { selectedPlan } = planSlice.actions;
export const {personalinfo} = planSlice.actions;
export const {toggle} = planSlice.actions
export const { addon } = planSlice.actions;
export default planSlice.reducer;