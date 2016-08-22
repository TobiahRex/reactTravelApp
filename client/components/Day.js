import React, { Component } from 'react';
import ClientStore from '../stores/ClientStore';
import FlipCard from 'react-flipcard';
import mui from 'muicss';
import Modal from './Modal';

export default class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { day, client, num } = this.props;

    return(
      <div className="flipcard">
        <FlipCard>

          <div className="flipcard-front">
              <p className="front-day"><i className="fa fa-calendar-o" aria-hidden="true"></i>
            &nbsp; Day {num}</p>
            <p className="itinerary-description">
              Breakfast at <a href={day.breakfast[0].url}>
                {day.breakfast[0].name}</a>
            </p>
            <p className="front-description">{day.breakfast[0].rating} stars of {day.breakfast[0].review_count} reviews</p>
            <img src={day.breakfast[0].image_url}/>
            <p className="itinerary-description">
              Lunch at <a href={day.lunch[0].url}>
               {day.lunch[0].name}</a>
            </p>
            <p className="front-description">{day.lunch[0].rating} stars of {day.lunch[0].review_count} reviews</p>
            <img src={day.lunch[0].image_url}/>
            <p className="itinerary-description">
              Dinner at <a href={day.dinner[0].url}>
               {day.dinner[0].name}</a>
            </p>
            <p className="front-description">{day.dinner[0].rating} stars of {day.dinner[0].review_count} reviews</p>
            <img src={day.dinner[0].image_url}/>
            <p className="itinerary-description">
              To do:  <a href={day.activities[0].url}>
               {day.activities[0].name}</a>
            </p>
            <img src={day.activities[0].image_url}/>
          </div>

          <div className="flipcard-back">
            <span className="itinerary-type-heading">
            Activities:</span>
            {day.activities.map(activity => {
              return <li><a href={activity.url}>{activity.name}</a> | {activity.rating} stars</li>
            })}
            <hr/>
            <span className="itinerary-type-heading">
            Breakfast:</span>
            {day.breakfast.map(breakfast => {
              return <li><a href={breakfast.url}>{breakfast.name}</a> | {breakfast.rating} stars</li>
            })}
            <hr/>
            <span className="itinerary-type-heading">
            Lunch:</span>
            {day.lunch.map(lunch => {
              return <li><a href={lunch.url}>{lunch.name}</a> | {lunch.rating} stars</li>
            })}
            <hr/>
            <span className="itinerary-type-heading">
            Dinner:</span>
            {day.dinner.map(dinner => {
              return <li><a href={dinner.url}>{dinner.name}</a> | {dinner.rating} stars</li>
            })}
          </div>
        </FlipCard>
      </div>
    )
  }
}
