import React, { Component } from 'react';
import API from '../API';
import ClientStore from '../stores/ClientStore';
import ClientActions from '../actions/ClientActions';

export default class Itinerary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: {},
      email: '',
    };

    this._getItinerary = this._getItinerary.bind(this);
  }

  componentDidMount() {
    ClientStore.on('CHANGE', this._getItinerary)
  }

  _getItinerary() {
    this.setState({ client: ClientStore.getClient() });
  }

  submitEmail(){
    let clientId = this.state.client._id;
    let email = this.state.email;

    ClientActions.submitEmail(email, clientId);

  }


  render() {
    return(
      <div>Itinerary<br/>
        Enter your email so we can send you this itinerary!
        <input onChange={ e => this.setState({ email: e.target.value })} type="email" placeholder="Email" />
        <button onClick={this.submitEmail} ></button>
      </div>
    )
  }
}
