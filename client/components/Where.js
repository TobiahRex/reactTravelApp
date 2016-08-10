import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class Where extends Component {
  constructor(props) {
    super(props);

    this.showItinerary = this.showItinerary.bind(this);
  }

  showItinerary() {
    browserHistory.push('/itinerary');
  }

  render() {
    return(
      <div className="slide">
         <div className="where">
           <h1>Where?</h1>
           <p>Not only vertical scrolling but also horizontal scrolling. With fullPage.js you will be able to add horizontal sliders in the most simple way ever.
           <button className="btn btn-sm btn-default" onClick={this.showItinerary}>Show me my itinerary!</button>
           </p>
         </div>
      </div>
    )
  }
}
