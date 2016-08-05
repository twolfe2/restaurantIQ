import * as types from '../actions/actionTypes';


export default function restaurantReducer(
  state = { isLoading: false, currRestaurant: {}, yelpInfo: {}, fourInfo: {} }, action) {
  // console.log('state in rs reducer', state);
  switch (action.type) {
    case types.RESTAURANT_SEARCH:
      console.log('reducer rs', action.restaurantList);
      return Object.assign({}, state, { restaurantList: action.restaurantList });
    case types.TOGGLE_LOADING:
      console.log('toggle loading', state);
      return Object.assign({}, state, { isLoading: !state.isLoading });
    case types.SET_RESTAURANT_DETAILS:
      console.log('set rest details', action.restaurant);
      return Object.assign({}, state, { currRestaurant: action.restaurant });
    case types.SET_YELP_INFO:
      return Object.assign({}, state, { yelpInfo: action.yelpInfo });
    case types.SET_FOUR_INFO:
      return Object.assign({}, state, { fourInfo: action.fourInfo });
    default:
      return state;
  }
}
