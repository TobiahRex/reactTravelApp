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

    ClientActions.submitEmail(email, clientId);
  }

  render() {
    return(
      <div className="slide">

        <div className="itinerary-content">
          <div className="itinerary-title">
            Itinerary
          </div>
          <div className="itinerary-message">
            Enter your email so we can send you this itinerary!
          </div>
          <div className="itinerary-email-input">
            <input onChange={ e => this.setState({ email: e.target.value })} type="email" placeholder="Email" />
          </div>
        </div>

        <div className="itinerary-next">
          <a onClick={this.submitEmail}>
            <i className='fa fa-5x fa-arrow-right'></i>
          </a>
        </div>

      </div>
    )
  }
}
