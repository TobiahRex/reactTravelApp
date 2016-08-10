import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ClientActions from '../actions/ClientActions';

export default class Where extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.showItinerary = this.showItinerary.bind(this);

  }

  componentDidMount() {
    ClientActions.getClientData();
  }

  showItinerary() {
    browserHistory.push('/itinerary');
  }

  render() {
    return(
      <div className="slide">
         <div className="where">
           <h1>Where are you going?</h1>
           <input type="text"
                  placeholder="City"
                  onChange={ e => this.setState({ city: e.target.value })}
           /><br/><br/>
           <button className="btn btn-sm btn-default" onClick={this.showItinerary}>Show me my itinerary!</button>

         </div>
      </div>
    )
  }
}
