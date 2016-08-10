import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveError(err) {
    AppDispatcher.dispatch({
      err,
      type: 'RECEIVED_DB_ERROR',
    });
  },
  receivedUserData(dbClient) {
    AppDispatcher.dispatch({
      dbClient,
      type: 'RECEIVED_DB_CLIENT',
    });
  },

}

export default ServerActions
