import React, { Component } from 'react';
import API from '../API';
import ClientStore from '../stores/ClientStore';

export default class Itinerary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      activities: [],
      id: ClientStore.getClientId()
    }

  }

  componentDidMount() {
    ClientActions.getClientData(this.state.id);
  }


  render() {
    return(
      <div>Itinerary<br/>
        Enter your email so we can send you this itinerary!
        <input type="email"
               placeholder="Email"
        />

      </div>
    )
  }
}
