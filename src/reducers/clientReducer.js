import toastr from 'toastr';
import types from '../actions/actionTypes';
import * as initialState from './initialState';


function clientReducer(state = initialState.client, action) {
  switch (action.type) {
    case types.RECEIVED_DB_ERROR:
      return toastr.error('Could not GET client information. Sorry', 'ERROR');

    case types.RECEIVED_NEW_CLIENT:
      return action.dbClient;

    case types.RECEIVED_UPDATED_CLIENT:
      return action.dbClient;

    case types.SENT_EMAIL:
      return toastr.success('Please check your email, and enjoy your trip.', 'SENT');

    default: return state;
  }
}

export default clientReducer;
