import * as types from '../actions/actionTypes';

const locations = ['San Francisco, CA', 'Chicago, IL', 'Fremont,CA', 'San Jose,CA', 'Pleasanton,CA'];
export default function restaurantReducer(
  state = { isLoading: false, currRestaurant: {}, yelpInfo: {}, fourInfo: {}, locations: locations, crosswalk: {} }, action) {
  // console.log('state in rs reducer', state);
  switch (action.type) {
    case types.RESTAURANT_SEARCH:
      return Object.assign({}, state, { restaurantList: action.restaurantList });
    case types.TOGGLE_LOADING:
      return Object.assign({}, state, { isLoading: !state.isLoading });
    case types.SET_RESTAURANT_DETAILS:
      return Object.assign({}, state, { currRestaurant: action.restaurant });
    case types.SET_YELP_INFO:
      return Object.assign({}, state, { yelpInfo: action.yelpInfo });
    case types.SET_FOUR_INFO:
      return Object.assign({}, state, { fourInfo: action.fourInfo });
    case types.GET_CROSSWALK:
      return Object.assign({}, state, { crosswalk: action.crosswalk });

    default:
      return state;
  }
}
