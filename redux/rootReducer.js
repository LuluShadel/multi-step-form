import { combineReducers } from 'redux';
import planReducer from './reducer';

const rootReducer = combineReducers({
  plan: planReducer,
  // ... d'autres reducers 
});

export default rootReducer;