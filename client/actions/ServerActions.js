import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receivedError(error) {
    AppDispatcher.dispatch({
      error,
      type: 'RECEIVED_DB_ERROR',
    });
  },
  receivedNewClient(dbClient) {
    AppDispatcher.dispatch({
      dbClient,
      type: 'RECEIVED_NEW_CLIENT',
    });
  },
}

export default ServerActions
