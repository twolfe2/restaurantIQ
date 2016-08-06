import * as types from './actionTypes';

function setUserLocation(coords) {
  return { type: types.SET_USER_LOCATION, coords };
}
function toggleLoading() {
  console.log('toggle loading actions');
  return { type: types.TOGGLE_LOADING_INPUT };
}

export default {
  updateLocality(locality) {
    return { type: types.UPDATE_LOCALITY, locality };
  },
  updateRegion(region) {
    return { type: types.UPDATE_REGION, region };
  },
  updateQ(q) {
    return { type: types.UPDATE_Q, q };
  },
  getUserLocation() {
    return dispatch => {
      dispatch(toggleLoading());
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(res => {
          if (res === undefined) {
            navigator.geolocation.getCurrentPosition(res2 => {
              dispatch(setUserLocation(res.coords));
            });
          } else{
            dispatch(setUserLocation(res.coords));
            dispatch(toggleLoading());
          }
        });
      }
    };
  }

};
