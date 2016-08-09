import React, { Component } from 'react'
import { Link } from 'react-router'
import CartStore from '../../stores/CartStore.js'
import CartActions from '../../actions/CartActions'
import toastr from 'toastr'
const uuid = require('uuid');


export default class CartTable extends Component {

  constructor(props) {
    super(props);

    this.generateItems = this.generateItems.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.subTotal = this.subTotal.bind(this);
    this.finalTotal = this.finalTotal.bind(this);
  }
  generateItems() {
    if(!this.props.items[0]) return;
    const items = this.props.items.map((stateItem, i) => {
      const item = stateItem;
      console.log('item: ', item);
      stateItem.uuid = uuid()
      return (
        <tr key={item._id}>
          <td className="text-center cart-cells">
            <div id="cart-product" className="row">
              <img id="cart-product-img" className="thumbnail col-xs-5" src={item.images.length ? item.images[0] : ''} />
              <span id="cart-product-desc" className="col-xs-8">{item.title} {item.model}</span>
            </div>
          </td>
          <td className="text-center cart-cells">
            <div id="cart-price">{`\u00a5 ${item.newPrice}`}</div>
          </td>
          <td className="text-center cart-cells">
            <div id="quantity">
              <span id="cart-quantity"><strong>{stateItem.cartQty}</strong></span>
              <div className="btn-group">
                <button onClick={this.decreaseQty.bind(null, item)} href="" className="btn btn-info">-</button>

                <button onClick={this.increaseQty.bind(null, item)} href="" className="btn btn-info">+</button>
              </div>
            </div>
          </td>
          <td className="text-center cart-cells">
            <div id="cart-subtotal">
              <strong>{this.subTotal(item.quantity, item.newPrice)}</strong>
            </div>
          </td>
        </tr>
      )
    })
    return items;
  }
  increaseQty(item) {
    if (item.cartQty) {
      item.cartQty += 1;
      toastr.info(`Added 1 ${item.title} ${item.model} from your cart.`, 'ADDED');
    } else {
      item.cartQty = 1;
    }
    CartActions.addLSCartItem(item);
  }
  decreaseQty(item) {
    item.cartQty -= 1;
    if( item.cartQty <= 0){
      toastr.warning(`${item.title} ${item.model} was removed from your cart.`, 'REMOVED');
      CartActions.removeLSCartItem(item);
    } else {
      toastr.info(`Removed 1 ${item.title} ${item.model} from your cart.`, 'REMOVED');
      CartActions.updateLSCartItem(item);
    }
  }
  subTotal(qty, price) {
    if (!qty || !price) return ('Quantity or Price is Empty.');
    return `\u00a5 ${qty * price}`;
  }
  finalTotal() {
    let itemTotal = this.props.items.map(item => item.newPrice * item.cartQty);
    return itemTotal.reduce((a,b) => a+b);
  }

  render() {
    let items = this.generateItems();
    let tableClass, emptyCart, footerVisibility;
    if(!items) {
      emptyCart = <h1>Your Cart Is Empty</h1>
      footerVisibility = 'hidden';
      tableClass = 'hidden';
    } else {
      emptyCart = '';
      footerVisibility = '';
      tableClass = 'table';
    }

    return (
      <div>
        <table id="cart-table" className={tableClass}>
          <thead>
            <tr>
              <th className="text-center cart-header"></th>
              <th className="text-center cart-header">Price</th>
              <th className="text-center cart-header">Quantity</th>
              <th className="text-center cart-header">Sub Total</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
        <footer className={footerVisibility}>
          <div className="total">
            <strong>{this.finalTotal}</strong>
          </div>
          <div className="checkout-actions pull-right">
            <Link to="checkout"><button className="btn btn-warning btn-lg "><strong>Checkout > </strong></button></Link>
          </div>
        </footer>
        {emptyCart}
      </div>
    );
  }
}
