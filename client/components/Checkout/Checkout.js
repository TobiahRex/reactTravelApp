import React, { Component } from 'react'
import { Link } from 'react-router'
import CheckoutSummary from './CheckoutSummary'
import CheckoutInfo from './CheckoutInfo'
import CartStore from '../../stores/CartStore'
import CartActions from '../../actions/CartActions'

function _getComponentState(){
  return { cart: CartStore.getCart() };
}

export default class Checkout extends Component {
  constructor(props){
    super(props)

    this.state = {
      info: {},
      cart: _getComponentState(),
    }
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount(){
    CartActions.getLSCartItems();
    CartStore.on('CHANGE', this._onChange);
  }

  componentWillUnmount() {
    CartStore.removeListener('CHANGE', this._onChange);
  }

  _onChange(){
    this.setState(_getComponentState());
  }

  render() { 
    return (
      <div className="checkout-wrapper row">
        <CheckoutInfo checkoutInfo={this.state.info}/>
        <CheckoutSummary cartInfo={this.state.cart} />
      </div>
    )
  }
}
