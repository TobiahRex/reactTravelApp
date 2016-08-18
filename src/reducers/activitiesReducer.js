import * as types from '../actions/actionTypes';
import * as initialState from './initialState';

function activitiesReducer(state = initialState.activities, action) {
  switch(action.type) {
    case types.RECEIVE_ACTIVITIES:
      return action.activities;


    default: return state;
  }
}
