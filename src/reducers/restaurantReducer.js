import * as types from '../actions/actionTypes';


export default function restaurantReducer(state = [], action) {
  switch (action.type) {
    case types.RESTAURANT_SEARCH:
      return [...state,
        Object.assign({}, action.restaurantList),
      ];
    default:
      return state;
  }
}
