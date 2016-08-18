import React, { Component } from 'react';
import ClientStore from '../stores/ClientStore';
import FlipCard from 'react-flipcard';

export default class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { day, client, num } = this.props;
    console.log('day:', day);
    console.log('client:', client);
    console.log('num:', num);
    return(
      <div className="flipcard">
        <FlipCard>

          <div className="flipcard-front">
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
            <p>Day {num}</p>
          </div>

          <div className="flipcard-back">
            <span className="itinerary-type-heading">
            Activities:</span>
            {day.activities.map(activity => {
              return <li><a href="{activity.url}">{activity.name}</a> | {activity.rating} stars</li>
            })}
            <hr/>
            <span className="itinerary-type-heading">
            Breakfast:</span>
            {day.breakfast.map(breakfast => {
              return <li><a href="{breakfast.url}">{breakfast.name}</a> | {breakfast.rating} stars</li>
            })}
            <hr/>
            <span className="itinerary-type-heading">
            Lunch:</span>
            {day.lunch.map(lunch => {
              return <li><a href="{lunch.url}">{lunch.name}</a> | {lunch.rating} stars</li>
            })}
            <hr/>
            <span className="itinerary-type-heading">
            Dinner:</span>
            {day.dinner.map(dinner => {
              return <li><a href="{dinner.url}">{dinner.name}</a> | {dinner.rating} stars</li>
            })}
          </div>
        </FlipCard>
      </div>
    )
  }
}
