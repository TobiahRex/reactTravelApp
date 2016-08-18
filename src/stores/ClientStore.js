import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import toastr from 'toastr'

let _client;

class ClientStore extends EventEmitter {
  constructor(props) {

    super(props);

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVED_DB_ERROR':
          this._receivedDbError(action.error);
          this.emit('ERROR');
          break;
        case 'RECEIVED_NEW_CLIENT':
          this._receivedNewClient(action.dbClient);
          this.emit('CHANGE');
          break;

        case 'RECEIVED_UPDATED_CLIENT':
          this._receivedNewClient(action.dbClient);
          this.emit('CHANGE');
          break;

        default :

      }
    });
  }
  _receivedDbError(error) {
    toastr.error(`Could not GET dbClient Info: ${error}`);
    console.log('ERROR: ', error);
  }
  _receivedNewClient(dbClient) {
    _client = dbClient;
  }
  _receivedUpdatedClient(dbClient) {
    _client = dbClient;
    console.log('updatedClient from store: ', _client);
  }
  getClient() {
    console.log('_client: ', _client);
    return _client;
  }
}

export default new ClientStore();
