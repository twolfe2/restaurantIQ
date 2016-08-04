import * as types from '../actions/actionTypes';

export default function inputReducer(state = { locality: '', region: '', q: ''}, action) {
  switch (action.type) {
    case types.UPDATE_LOCALITY:
      console.log('input reducer locality', action);
      return Object.assign({}, state, { locality: action.locality });
    case types.UPDATE_REGION:
      return Object.assign({}, state, { region: action.region });
    case types.UPDATE_Q:
      return Object.assign({}, state, { q: action.q });
    default:
      return state;
  }
}
