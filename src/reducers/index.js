import { combineReducers } from 'redux';
import restaurants from './restaurantReducer';
import input from './inputReducer';


const rootReducer = combineReducers({
  restaurants,
  input,
});

export default rootReducer;
