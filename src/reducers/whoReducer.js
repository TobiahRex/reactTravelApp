import types from '../actions/actionTypes';
import * as initialState from './initialState';


function whoReducer(state = initialState.who, action) {
  switch (action.type) {
    case types.WHO_ADD_MALE: {
      const newWho = Object.assign({}, state);
      ++newWho.maleCount;
      return newWho;
    }
    case types.WHO_ADD_FEMALE: {
      const newWho = Object.assign({}, state);
      ++newWho.femaleCount;
      return newWho;
    }
    case types.WHO_ADD_KID: {
      const newWho = Object.assign({}, state);
      ++newWho.kidsCount;
      return newWho;
    }
    default: return state;
  }
}

export default whoReducer;
