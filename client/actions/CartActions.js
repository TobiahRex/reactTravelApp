
import API from '../API'

const CartActions = {
  getLSCartItems() {
    API.getLSCartItems();
  },
  addLSCartItem(item) {
    API.addLSCartItem(item);
  },
  removeLSCartItem(item) { 
    API.removeLSCartItem(item);
  },
  updateLSCartItem(item) {
    API.updateLSCartItem(item);
  },
  addNewAddress(address) {
    API.addNewAddress(address);
  },
}

export default CartActions
