import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import toastr from 'toastr'

let _cart = [];
let _address = {};

class CartStore extends EventEmitter {

  constructor(props) {
    super(props);
    this._updateLSCart = this._updateLSCart.bind(this);

    AppDispatcher.register(action => {
      switch (action.type) {

        case 'UPDATE_LS_CART':
          this._updateLSCart(action.items);
          this.emit('CHANGE');
          break;

        case 'RECEIVED_NEW_ADDRESS':
          this._addNewAddress(action.address);
          this.emit('CHANGE');
          break;

        default :
      }
    });
  }

  _updateLSCart(items) {
    if (!items) console.error('Did not provide required item for UPDATE.');
    _cart = items;
  }

  _addNewAddress(address) {
    if(address.Error) toastr.error(address.Error, 'ERROR');
    _address = address;
  }

  getCart() {
    return _cart;
  }

  getAddress() {
    return _address;
  }

}

export default new CartStore();
