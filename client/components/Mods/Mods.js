import React, { Component } from 'react'

import ModStore from '../../stores/ModStore.js'
import ProductActions from '../../actions/ProductActions.js'
import ModsDisplay from './ModsDisplay.js'

function _getComponentState() {
  return { mods: ModStore.getAllMods() }
}

export default class Mods extends Component {
  constructor(props) {
    super(props);

    this.state = _getComponentState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ProductActions.getAllMods();
    ModStore.on('CHANGE', this._onChange);
  }

  componentWillUnmount() {
    ModStore.removeListener('CHANGE', this._onChange);
  }

  _onChange() {
    this.setState(_getComponentState());
  }

  // ModsDisplay will be a DIB render

  render() {
    return (
      <div id="mods-list" className="container-fluid">
        <div className="row mod-products">
          <ModsDisplay mods={this.state.mods} />
        </div>
      </div>
    )
  }
}
