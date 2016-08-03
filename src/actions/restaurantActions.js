import * as types from './actionTypes';
import * as restaurantApi from '../api/restaurant';

function restaurantListSuccess(restaurantList) {
  return { type: types.RESTAURANT_SEARCH, restaurantList };
}

function restaurantListFail(err) {
  console.log(err);
}

export function getRestaurantList(searchObj) {
  restaurantApi.getRestaurants(searchObj)
    .then(res => {
      console.log(res.data);
      restaurantListSuccess(res);
    }).catch(err => {
      restaurantListFail(err);
    });
}






