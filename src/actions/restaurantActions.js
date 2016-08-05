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
        console.log('yelp success:', res.data);
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


export function getAllRestaurantDetails(id) {
  return dispatch => {
    restaurantApi.getOneRestaurant(id)
      .then(res => {
        const rest = res.data[0];
        console.log('rest id: ', rest.factual_id);
        dispatch(getYelpInfo(rest.factual_id));
        dispatch(getFourInfo(rest.latitude, rest.longitude));
        dispatch(setRestaurantDetails(res.data[0]));
      }).catch(err => {
        console.log(err);
      });
  };
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
