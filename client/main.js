import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './components/App.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import About from './components/About/About.js'
import Contact from './components/Contact/Contact.js'
import Mods from './components/Mods/Mods.js'
import Cart from './components/Cart/Cart.js'
import Checkout from './components/Checkout/Checkout.js'
import modDetails from './components/Mods/modDetails.js'
import ShippingMethod from './components/Checkout/ShippingMethod.js'

render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="about" component={About} />
        <Route path="contact" component={Contact} />
        <Route path="mods" component={Mods} />
        <Route path="cart" component={Cart} />
        <Route path="checkout" component={Checkout} />
        <Route path="shipping" component={ShippingMethod} />
        <Route path="mods/:id" component={modDetails} />
      </Route>
    </Router>,
  document.getElementById('js-main')
)
