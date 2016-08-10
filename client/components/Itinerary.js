import React, { Component } from 'react';
import API from '../API';


export default class Itinerary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      activities: [],
    }
  }

  componentDidMount() {
    // ClientActions.getClientData();
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
