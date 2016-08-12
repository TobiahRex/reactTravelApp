import React, { Component } from 'react';
import API from '../API';
import ClientStore from '../stores/ClientStore';
import Day from './Day';

export default class Itinerary extends Component {
  constructor(props) {
    super(props);

    this.state = { client: {} };

    this._getItinerary = this._getItinerary.bind(this);
  }

  componentDidMount() {
    ClientStore.on('CHANGE', this._getItinerary)
  }

  _getItinerary() {
    this.setState({
      client: ClientStore.getClient()
    })

    console.log('this.state.client:', this.state.client);
  }


  render() {
    return(
      <div>Itinerary<br/>
        Enter your email so we can send you this itinerary!

        <If condition={this.state.client}>
          {this.state.client.itinerary.map((day, index) => {
            return <Day key={index} day={day} />
          })}
        </If>
        <input type="email" placeholder="Email" />
      </div>
    )

  }

}
