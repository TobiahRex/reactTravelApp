import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ClientActions from '../actions/ClientActions';
import RestaurantActions from '../actions/RestaurantActions';
import ActivityActions from '../actions/ActivityActions';
import API from '../API';

export default class Where extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.showItinerary = this.showItinerary.bind(this);

  }

  componentDidMount() {
    // ClientActions.getClientData();
  }

  showItinerary() {
    if(this.state.city === '') {
      swal({
        title: 'Whoa there!',
        text: 'If you want an itinerary, you\'re going to need to give us a destination.',
        type: 'warning',
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#f7b8b8'
      })
    } else {
      RestaurantActions.getRestaurants(this.state.city);
      ActivityActions.getActivities(this.state.city);
      // route will be to make api call, which will make the call and also save results to db
      browserHistory.push('/itinerary');
    }
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
