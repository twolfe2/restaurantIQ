import * as types from '../actions/actionTypes';


export default function restaurantReducer(state = [], action) {
  switch (action.type) {
    case types.RESTAURANT_SEARCH:
    console.log('reducer rs', action.restaurantList);
      return [...state, ...action.restaurantList];
    default:
      return state;
  }
}
