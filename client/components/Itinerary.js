import React, { Component } from 'react';
import API from '../API';
import ClientStore from '../stores/ClientStore';

import ClientActions from '../actions/ClientActions';

import Day from './Day';


export default class Itinerary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: {},
      email: '',
    };

    this._getItinerary = this._getItinerary.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }
  componentDidMount() {
    ClientStore.on('CHANGE', this._getItinerary);
  }
  _getItinerary() {
    this.setState({ client: ClientStore.getClient() });
  }
  submitEmail(){
    let clientId = this.state.client._id;
    let email = this.state.email;

    ClientActions.sendEmail(clientId, email);
  }

  render() {
    return(
      <div className="slide">

        <If condition={this.state.client}>
          {this.state.client.itinerary.map((day, index) => {
            return <Day key={index} day={day} />
          })}
        </If>
        <input type="email" placeholder="Email" value={this.state.email} onChange={ e => this.setState({ email: e.target.value })}/>        
      </div>
    )
  }
  )}
}
