import React, { Component } from 'react'
import countries from './countryConstants'
import uuid from 'uuid'

class CountrySelector extends Component {
  render() {
    let countryOptions = countries.map(countryObj =>
      <option key={uuid()} value={countryObj.name}>{countryObj.name}</option>
    );
    return (
      <div className="form-group form-control customer-info customer-info-country-container">
      <label id="select-country-label" htmlFor="select-country" className="text-muted">Country</label>
      <select id="select-country"
        className="form-control customer-info customer-info-country"
        onChange={(e) => this.props.countryProps.submitCountry(e.target.value)} value={this.props.country}>
      {countryOptions}
      </select>
      </div>
    )
  }
}

export default CountrySelector
