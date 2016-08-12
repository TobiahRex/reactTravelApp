import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ClientActions from '../actions/ClientActions';
import RestaurantActions from '../actions/RestaurantActions';
import ActivityActions from '../actions/ActivityActions';
import ClientStore from '../stores/ClientStore';

export default class Where extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    }

    this.showItinerary.bind(this);

  }

  componentDidMount() {
    // ClientActions.getClientData();
  }

  showItinerary() {
    let client = ClientStore.getClient();
    if(this.state.city === '') {
      swal({
        title: 'Whoa there!',
        text: 'If you want an itinerary, you\'re going to need to give us a destination.',
        type: 'warning',
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#f7b8b8'
      })
    } else {
      RestaurantActions.get
    }
    // else {
    //   API.getBreakfast(client._id, this.state.city);
    //   API.getLunch(this.state.id, this.state.city);
    //   API.getDinner(this.state.id, this.state.city);
    //   API.getActivities(this.state.id, this.state.city);

      browserHistory.push('/itinerary');
    }
  }

  render() {
    return(
      <div className="slide">
         <div className="where">
           <h1>Where are you going?</h1>
           <i class="fa fa-map-marker" aria-hidden="true"></i>
           <input type="text"
                  placeholder="City"
                  onChange={ e => this.setState({ city: e.target.value })}
           /><br/><br/>
           <button className="btn btn-sm btn-default" onClick={this.showItinerary}>Show me my itinerary!</button>
         </div>

         <footer className="questionnaire-footer">
           <a onClick={this.showItinerary}>
           <i className='intro-right-arrow fa fa-5x fa-arrow-right'></i>
           </a>
         </footer>
      </div>
    )
  }
}
