import toastr from 'toastr';
import moment from 'moment';
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

    case types.SENT_EMAIL: {
      return toastr.success('Please check your email, and enjoy your trip.', 'SENT');
    }

    case types.CLIENT_ADD_MALE: {
      const who = Object.assign({}, state.who);
      ++who.male;
      const newClient = Object.assign({}, state, { who });
      return newClient;
    }
    case types.CLIENT_ADD_FEMALE: {
      const who = Object.assign({}, state.who);
      ++who.female;
      const newClient = Object.assign({}, state, { who });
      return newClient;
    }
    case types.CLIENT_ADD_KID: {
      const who = Object.assign({}, state.who);
      ++who.kids;
      const newClient = Object.assign({}, state, { who });
      return newClient;
    }
    case types.CLIENT_SUBMIT_DATES: {
      const when = Object.assign({}, action.dates);
      when.days = when.dates.end.diff(when.dates.start, 'days');
      const newClient = Object.assign({}, state, { when });
      return newClient;
    }

    default: return state;
  }
}

export default clientReducer;
