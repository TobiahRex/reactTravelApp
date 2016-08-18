import * as types from '../actions/actionTypes';
import * as initialState from './initialState';

function activitiesReducer(state = initialState.client, action) {
  switch(action.type) {
    case types.RECEIVE_ACTIVITIES:
      return (Object.assign({}, state, action.activities)); break;

    default: return state;
  }
}
