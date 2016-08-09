import React, { Component } from 'react'
import { Link } from 'react-router'
import Breadcrumb_cart from './breadcrumb_cart'
import CountrySelector from './countrySelector'
import StateSelector from './stateSelector'
import CartActions from '../../actions/CartActions'

export default class CheckoutInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      company: '',
      street: '',
      city: '',
      state: '',
      country: '',
      zip: '',
      phone: '',
    }
    this.saveAddress = this.saveAddress.bind(this);
    this.submitCountry = this.submitCountry.bind(this);
    this.submitState = this.submitState.bind(this);
  }

  submitCountry(country) {
    if (!country) toastr.error('Could not choose a country.', 'ERROR');
    this.setState({ country });
  }

  submitState(state) {
    if (!state) toastr.error('Could not choose a state.', 'ERROR');
    this.setState({ state });
  }

  saveAddress(event) {
    event.preventDefault();

    let Address = { Address: this.state }

    CartActions.addNewAddress(Address);
    this.setState({
      firstName: '',
      lastName: '',
      company: '',
      street: '',
      city: '',
      state: '',
      country: '',
      zip: '',
      phone: '',
    });
  };

  render() {
    let { checkoutInfo } = this.props
    let countryProps = {
      submitCountry: this.submitCountry,
      country: this.state.country,
    };
    let stateProps = {
      submitState: this.submitState,
      state: this.state.state,
    };
    let Address = {};
    return(
      <div id="checkout-info-wrapper" className="main col-xs-5 well">
        <div id="checkout-main">
          <div id="checkout-main-header">
            <Breadcrumb_cart />
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
              <h3 className="customer-info-title">Customer Information</h3>
              <input type="email" className="customer-info customer-info-email form-control" placeholder="Email" required/>
              <h5>Already have an account with us? <span className="text-success" id="custom-info-login-redirect"> Log in</span> </h5>

              <h3 className="customer-info-title">Shipping Address</h3>
              <form>
                <div className="form-group">
                  <input type="text" className="customer-info custom-info-firstname form-control" placeholder="First name" value={this.state.firstName}  onChange={ e => this.setState({ firstName: e.target.value })}required/>

                  <input type="text" className="customer-info custom-info-lastname form-control" placeholder="Last name" value={this.state.lastName}  onChange={ e => this.setState({ lastName: e.target.value })}required/>

                  <input type="text" className="customer-info custom-info-company form-control" placeholder="Company (optional)" value={this.state.company}  onChange={ e => this.setState({ company: e.target.value })}/>

                  <input type="text" className="customer-info custom-info-address form-control" placeholder="Address" value={this.state.street}  onChange={ e => this.setState({ street: e.target.value })}required/>

                  <input type="text" className="customer-info custom-info-apt form-control" placeholder="Apt, suite, etc. (optional)" value={this.state.apt}  onChange={ e => this.setState({ apt: e.target.value })}/>

                  <input type="text" className="customer-info custom-info-city form-control" placeholder="City" value={this.state.city}  onChange={ e => this.setState({ city: e.target.value })}required/>

                  <CountrySelector countryProps={countryProps} />

                  <StateSelector stateProps={stateProps} />

                  <input type="text" className="customer-info custom-info-zip form-control" placeholder="Zip code" value={this.state.zip}  onChange={ e => this.setState({ zip: e.target.value })}required/>

                  <input type="text" className="customer-info customer-info-phone form-control" placeholder="Phone (optional)" value={this.state.phone} onChange={ e => this.setState({ phone: e.target.value })}/>

                  <div className="checkbox-wrapper">
                    <div className="checkbox-input">
                      <input id="saveinfo-checkbox" type="checkbox" className="saveinfo-checkbox"/>
                      <label htmlFor="saveinfo-checkbox" className="checkbox-label">
                        Save this information for next time.
                      </label>
                    </div>
                  </div>

                  <Link to="shipping">
                    <button type="submit" onClick={this.saveAddress} className="to-shipping-method-button col-xs-12 btn btn-lg btn-warning">
                      Continue to shipping method
                    </button>
                  </Link>

                </div>
              </form>
            </div>
          </div>
          <div id="main-footer">
          </div>
        </div>
      </div>
    )
  }
}
