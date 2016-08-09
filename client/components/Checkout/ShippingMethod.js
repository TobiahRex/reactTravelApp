import React, { Component } from 'react'
import Breadcrumb_shipping from './breadcrumb_shipping'
import { Link } from 'react-router'
import CartStore from '../../stores/CartStore'

// TODO User arrives here by clicking on a Link so there needs to be a way to access shipping information props from a parent component.
// May have to look in to sending data with <Link> look into Props accessible through react-router.

function _getComponentState() {
  return { Address: CartStore.getAddress() };
}

export default class ShippingMethod extends Component {
  constructor(props) {
    super(props);

    this.state = _getComponentState();
    this._onChange = this._onChange.bind(this);

  }

  componentDidMount() {
    CartStore.on('CHANGE', this._onChange);
  }

  componentWillUnmount() {
    CartStore.removeListener('CHANGE', this._onChange);
  }

  _onChange() {
    this.setState(_getComponentState());
  }

  render() {
    return(
      <div className="main col-xs-6">
        <div id="checkout-main">
          <div id="checkout-main-header">
            <Breadcrumb_shipping />
          </div>
          <div id="main-content">
            <div className="stripe-payment-container">
              <button className="stripe-payment-button btn btn-warning">
                <span className="stripe-payment-text text-default ">Checkout with </span>
                <img src="client/styles/images/stripe_icon.png" alt="stripe" className="stripe-payment-logo"/>
              </button>
            </div>
            <div className="alternative-payment-method">
              <span className="alternative-payment-seperator"> OR </span>
            </div>
            <div className="customer-info-container">
              <h3 className="customer-info-title">Shipping Address</h3>

              <h5>{this.state.Address.name}<span className="text-success" id="custom-info-login-redirect"> Log in</span> </h5>
              <h5>{this.state.Address.street}<span className="text-success" id="custom-info-login-redirect"> Log in</span> </h5>
              <h5>{this.state.Address.city}, {this.state.Address.state}, {this.state.Address.zip}<span className="text-success" id="custom-info-login-redirect"> Log in</span> </h5>
              <h5>{this.state.Address.country}<span className="text-success" id="custom-info-login-redirect"> Log in</span> </h5>

              <Link to="checkout">Edit shipping address</Link>

              <h3 className="customer-info-title">Shipping Method</h3>

            </div>
          </div>
          <div id="main-footer">
          </div>
        </div>
      </div>
    )
  }
}
