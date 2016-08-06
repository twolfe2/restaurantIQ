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

function clearInputs() {
  console.log('in clearInputs');
  return { type: types.CLEAR_INPUTS };
}

function crosswalkSuccess(crosswalk) {
  return { type: types.GET_CROSSWALK, crosswalk };
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

export function getFourInfo(id) {
  return dispatch => {
    restaurantApi.getFourInfo(id)
      .then(res => {
        dispatch(fourSuccess(res.data.response.venue));
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

export function getCrosswalk(id) {
  return dispatch => {
    console.log('in getCrosswalk');
    restaurantApi.getCrosswalk(id)
      .then(res => {
        console.log('crosswalk', res);
        dispatch(crosswalkSuccess(res.data));
      }).catch(err => {
        console.log('err', err);
      })
  }
}

export function getRestaurantList(searchObj) {
  return dispatch => {
    dispatch(toggleLoading());
    restaurantApi.getRestaurants(searchObj)
      .then(res => {
        dispatch(restaurantListSuccess(res.data));
        dispatch(toggleLoading());
        dispatch(clearInputs());
      }).catch(err => {
        restaurantListFail(err);
      });
  };
}
