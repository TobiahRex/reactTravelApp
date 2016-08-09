import { get, post, ajax } from 'jquery'
import AppDispatcher from './AppDispatcher'
import ServerActions from './actions/ServerActions'


const API = {
  // Local Storage API
  getLSCartItems() {
    let lsItems = this.getLocalStorage();
    ServerActions.updateLSCart(lsItems);
  },
  addLSCartItem(item) {
    let ls = this.getLocalStorage();
    console.log('ls.length: ', ls.length);
    if (!ls.length) {
      ls.push(item);
      return this.writeToLocalStorage(ls);
    } else {
      ls = ls.map(lsItem => {
        console.log('lsItem: ', lsItem);
        if (lsItem._id === item._id){
          lsItem = item;
          return lsItem;
        } else {
          return item;
        }
      });
      return this.writeToLocalStorage(ls);
    }
  },
  removeLSCartItem(item) {
    let ls = this.getLocalStorage();
    console.log('ls before removal: ', ls);
    ls = ls.map((lsItem, i) => {
      if(lsItem._id === item._id) {
        ls.splice(i, 1);
        return;
      }
      return lsItem;
    });
    if (!ls[0]){
      localStorage.cart = JSON.stringify([]);
      ServerActions.updateLSCart([])
    } else {
      this.writeToLocalStorage(ls);
    }
  },
  updateLSCartItem(item) {
    let ls = this.getLocalStorage();
    ls = ls.map(lsItem => lsItem._id === item._id ? item : lsItem);
    this.writeToLocalStorage(ls);
  },
  getLocalStorage(){
    let ls = [];
    try {
      ls = JSON.parse(localStorage.cart);
    } catch(err) {
      localStorage.cart = JSON.stringify([]);
    }
    return ls;
  },
  writeToLocalStorage(data){
    let ls = data;
    localStorage.cart = JSON.stringify(ls);
    let newLs = this.getLocalStorage();
    console.log('newLs', newLs);
    ServerActions.updateLSCart(newLs);
  },

  // Backend API
  getAllMods() {
    get('/api/products/mods')
    .done(res => {ServerActions.getAllMods(res)})
    .fail(err => console.error(`Get All Mods = 400: ${err}`));
  },
  addNewMod(mod) {
    post('/api/products/mods', mod)
    .done(res => ServerActions.addNewMod(res))
    .fail(err => console.error(`Add new Mod = 400: ${err}`));
  },
  removeMod(id) {
    ajax({
      url: `/api/products/mods/${id}`,
      type: 'DELETE',
    })
    .done(res => ServerActions.removeMod(res))
    .fail(err => console.error(err));
  },
  updateMod(id) {
    ajax({
      url: `/api/products/mods/${id}`,
      type: 'PUT',
    })
    .done(res => ServerActions.updatedMod(res))
    .fail(err => console.error(err));
  },

  // Checkout API
  addNewAddress(address) {
    let lsAddress = JSON.stringify(address);
    localStorage.address = lsAddress;

    lsAddress = this.getLSAddress();
    ServerActions.addedAddress(lsAddress);
  },
  getLSAddress() {
    let lsAddress = {}
    try {
      lsAddress = JSON.parse(localStorage.address);
    } catch(err) {
      lsAddress = { Error: 'Could not retrieve LS Address'};
    }
    return lsAddress;
  },
}

export default API
