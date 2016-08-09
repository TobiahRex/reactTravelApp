import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  addedAddress(address) {
    AppDispatcher.dispatch({
      address,
      type: 'RECEIVED_NEW_ADDRESS',
    });
  },
}

export default ServerActions
