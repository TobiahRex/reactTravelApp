import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receivedError(error) {
    AppDispatcher.dispatch({
      error,
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
