import React, { Component } from 'react'
import states from './statesConstants'
import uuid from 'uuid'

class StateSelector extends Component {
  render() {
    console.log("this.props: ",this.props);
    let stateOptions = states.map(stateObj =>
      <option key={uuid()} data-abbrev={stateObj.abbreviation} value={stateObj.name}>{stateObj.name}</option>
    );
    return(
      <div className="form-group form-control customer-info customer-info-state-container">
      <label id="select-state-label" htmlFor="select-state" className="text-muted">State</label>
      <select id="select-state" className="form-control customer-info customer-info-state" onChange={(e) => this.props.stateProps.submitState(e.target.value)} value={this.props.stateProps.state}>
      {stateOptions}
      </select>
      </div>
    )
  }
}

export default StateSelector
