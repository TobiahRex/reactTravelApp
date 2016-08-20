import * as initialState from './initialState';
import types from '../actions/actionTypes';

function whoReducer(state = initialState.who, action) {
  switch (action.types) {    
    case types.WHO_ADD_MALE: {
      let newState = state.maleCount;
      return ++newState;
    }
    case types.WHO_ADD_FEMALE: {
      let newState = state.femaleCount;
      return ++newState;
    }
    case types.WHO_ADD_KID: {
      let newState = state.kidsCount;
      return ++newState;
    }
    default: return state;
  }
}
