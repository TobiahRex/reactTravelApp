import toastr from 'toastr';
import * as types from '../';
import * as initialState from './initialState';

function clientReducer(state = initialState.client, action) {
  switch (action.type) {

    case types.RECEIVED_DB_ERROR:
      return toastr.error('Could not GET client information. Sorry', 'ERROR');

    case types.RECEIVED_NEW_CLIENT:
      return action.dbClient;

    case types.RECEIVED_UPDATED_CLIENT:
      return action.dbClient;

    default: return state;
  }
}

export default clientReducer;
