import types from '../actions/actionTypes';
import * as initialState from './initialState';


function whoReducer(state = initialState.who, action) {
  switch (action.type) {
    case types.WHO_ADD_MALE: {
      const newState = Object.assign({}, state);
      ++newState.maleCount;
      return newState;
    }
    case types.WHO_ADD_FEMALE: {
      const newState = Object.assign({}, state);
      ++newState.femaleCount;
      return newState;
    }
    case types.WHO_ADD_KID: {
      const newState = Object.assign({}, state);
      ++newState.kidsCount;
      return newState;
    }
    default: return state;
  }
}

export default whoReducer;
