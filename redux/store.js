
import { configureStore } from '@reduxjs/toolkit';

// Import reducers ici
import myReducer from "./reducer"

const store = configureStore({
  reducer: {
    // Ajout reducers ici
    myReducer,
  },
});

export default store;