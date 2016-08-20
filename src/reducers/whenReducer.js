import types from '../actions/actionTypes';
import * as initialState from './initialState';

export default function submitDate(state = initialState.when, action) {
  switch (action.type) {
    case types.WHEN_SUBMIT_DATE: {
      const value = Object.assign({}, action.dates);
      let days = Object.assign({}, state.days);
      days = value.dates.end.diff(value.dates.start, 'days');
      const newState = Object.assign({}, state, { value, days });
      return newState;
    }

    default: return state;
  }
}
