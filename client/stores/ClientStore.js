import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import toast from 'toastr'

let _client = {};

class ModStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVED_DB_ERROR':
          this._receivedDbError(action.error);
          this.emit('ERROR');
          break;
        case 'RECIEVED_DB_CLIENT':
          this._receivedDbClient(action.dbClient);
          this.emit('CHANGE');
          break;


        default :
      }
    });
  }
  _receivedDbError(error) {
    toastr.error(`Could not GET dbClient Info: ${error}`);
  }
  _receivedDbClient(dbClient) {
    _client.client = dbClient;
  }
  getClient() {
    return _client;
  }
}

export default new ModStore();
