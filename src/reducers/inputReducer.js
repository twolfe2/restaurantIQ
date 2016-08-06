import * as types from '../actions/actionTypes';

export default function inputReducer(state = { locality: '', region: '', q: '', currLocation: '' }, action) {
  switch (action.type) {
    case types.UPDATE_LOCALITY:
      console.log('input reducer locality', action);
      return Object.assign({}, state, { locality: action.locality });
    case types.UPDATE_REGION:
      return Object.assign({}, state, { region: action.region });
    case types.UPDATE_Q:
      return Object.assign({}, state, { q: action.q });
    case types.SET_USER_LOCATION:
      console.log('set user location', action);
      return Object.assign({}, state,
        { currLocation: { latitude: action.coords.latitude, longitude: action.coords.longitude } });
    case types.TOGGLE_LOADING_INPUT:
      return Object.assign({}, state, { isLoading: !state.isLoading });
    case types.CLEAR_INPUTS:
      return Object.assign({}, state, { locality: '', q: '', currLocation: '' });
    default:
      return state;
  }
}
