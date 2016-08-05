import * as types from './actionTypes';
import * as restaurantApi from '../api/restaurant';

function restaurantListSuccess(restaurantList) {
  console.log('success', restaurantList);
  return { type: types.RESTAURANT_SEARCH, restaurantList };
}

function restaurantListFail(err) {
  console.log(err);
}

function toggleLoading() {
  console.log('toggle loading actions');
  return { type: types.TOGGLE_LOADING };
}

function yelpSuccess(yelpInfo) {
  return { type: types.SET_YELP_INFO, yelpInfo };
}

function fourSuccess(fourInfo) {
  return { type: types.SET_FOUR_INFO, fourInfo };
}

export function getYelpInfo(id) {
  return dispatch => {
    restaurantApi.getYelpInfo(id)
      .then(res => {
        dispatch(yelpSuccess(res.data));
      }).catch(err => console.log(err));
  };
}

export function getFourInfo(lat, long) {
  return dispatch => {
    restaurantApi.getFourInfo(lat, long)
      .then(res => {
        console.log('action res', res);
        dispatch(fourSuccess(res.data.response));
      }).catch(err => console.log(err));
  };
}

export function setRestaurantDetails(restaurant) {
  return { type: types.SET_RESTAURANT_DETAILS, restaurant };
}


export function getRestaurantList(searchObj) {
  return dispatch => {
    dispatch(toggleLoading());
    restaurantApi.getRestaurants(searchObj)
      .then(res => {
        dispatch(restaurantListSuccess(res.data));
        dispatch(toggleLoading());
      }).catch(err => {
        restaurantListFail(err);
      });
  };
}
