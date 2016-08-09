import React, { Component, PropTypes } from 'react'

import Mod from './Mod.js'

export default class ModsDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { mods } = this.props;
    let display = mods.length && mods.map(mod => <Mod key={mod._id} mod={mod}/>);
    return (
      <div className="container">
        <div className="row">
          {display || 'No Mods To Display'}
        </div>
      </div>
    )
  }
}
