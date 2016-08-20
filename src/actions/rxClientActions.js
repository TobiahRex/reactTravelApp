import types from "./actionTypes";

export function receivedError(error) {
  return {
    error,
    type: types.RECEIVED_DB_ERROR,
  };
}

export function receivedNewClient(dbClient) {
  return {
    dbClient,
    type: types.RECEIVED_NEW_CLIENT,
  };
}

export function receivedClientData(dbClient) {
  return {
    dbClient,
    type: types.RECEIVED_UPDATED_CLIENT,
  };
}

export function sentEmail() {
  return {
    type: types.SENT_EMAIL,
  };
}

export function addMale() {
  return {
    type: types.CLIENT_ADD_MALE,
  };
}

export function addFemale() {
  return {
    type: types.CLIENT_ADD_FEMALE,
  };
}

export function addKid() {
  return {
    type: types.CLIENT_ADD_KID,
  };
}

export function submitDates(dates) {
  return {
    dates,
    type: types.CLIENT_SUBMIT_DATES,
  };
}
