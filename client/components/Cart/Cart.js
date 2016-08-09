import React, { Component } from 'react'

import CartStore from '../../stores/CartStore.js'
import CartActions from '../../actions/CartActions.js'
import CartTable from './CartTable.js'

function _getComponentState() {
  return { items: CartStore.getCart() }
}

export default class Cart extends Component {

  constructor(props) {
    super(props);

    this.state = _getComponentState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    CartStore.on('CHANGE', this._onChange);
    CartActions.getLSCartItems();

  }

  componentWillUnmount() {
    CartStore.removeListener('CHANGE', this._onChange);
  }

  _onChange() {
    this.setState(_getComponentState());
  }

  // ModsDisplay will be a DIB render

  render() {
    return (
      <div className="container">
        <div>
        </div>
        <CartTable items={this.state.items}/>
      </div>
    )
  }
}
