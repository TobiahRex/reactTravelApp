import types from './actionTypes';

export function addMale() {
  return {
    type: types.WHO_ADD_MALE,
  };
}

export function addFemale() {
  return {
    type: types.WHO_ADD_FEMALE,
  };
}

export function addKid() {
  return {
    type: types.WHO_ADD_KID,
  };
}
