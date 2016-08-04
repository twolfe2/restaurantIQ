import * as types from '../actions/actionTypes';


export default function restaurantReducer(state = { isLoading: false }, action) {
  // console.log('state in rs reducer', state);
  switch (action.type) {
    case types.RESTAURANT_SEARCH:
      console.log('reducer rs', action.restaurantList);
      return Object.assign({}, state, { restaurantList: action.restaurantList });
    case types.TOGGLE_LOADING:
      console.log('toggle loading', state);
      return Object.assign({}, state, { isLoading: !state.isLoading });
    default:
      return state;
  }
}
