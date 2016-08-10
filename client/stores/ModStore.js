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
    _mods = dbMods;
  }
  _receiveOneMod(dbMod) {
    _mods = _mods.push(dbMod);
  }
  getAllMods() {
    return _mods;
  }
  getOneMod(mod) {
    const mods = _mods.map(_mod => {
      if (_mod.id === mod._id) {
        return mod
      }
      return _mod;
    });
    return mods;
  }
}

export default new ModStore();
