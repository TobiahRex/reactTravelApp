import React, { Component } from 'react'
import { Link } from 'react-router'

// TODO Add a Footer
// Include a Copyright & Accepted Payment methods

// TODO Include 'Are you over 18?' Modal

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/"><img id="navbar-logo" src="client/styles/images/vapeswitch_blank.png" /></Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-right">
              <li><Link to="checkout"><img id="navbar-cart" src="client/styles/images/payment-method.png" /><br /> Checkout</Link></li>
              <li><Link to="cart"><img id="navbar-cart" src="client/styles/images/shopping-cart.png" /><br />Cart</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
