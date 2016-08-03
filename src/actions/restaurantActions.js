import * as types from './actionTypes';
import * as restaurantApi from '../api/restaurant';

function restaurantListSuccess(restaurantList) {
  console.log('success', restaurantList);
  return { type: types.RESTAURANT_SEARCH, restaurantList };
}

function restaurantListFail(err) {
  console.log(err);
}

export function getRestaurantList(searchObj) {
  return dispatch => {
    restaurantApi.getRestaurants(searchObj)
      .then(res => {
        console.log(res.data);
        dispatch(restaurantListSuccess(res.data));
      }).catch(err => {
        restaurantListFail(err);
      });
  };
}






