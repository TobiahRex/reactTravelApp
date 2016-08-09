import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _mods = [];

class ModStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_ALL_MODS':
        this._receiveMods(action.mods);
        this.emit('CHANGE');
        break;

        case 'RECEIVE_ONE_MOD':
        this._receiveOneMod(action.mod);
        this.emit('CHANGE');
        break;

        default :
      }
    });
  }
  _receiveMods(dbMods) {
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
