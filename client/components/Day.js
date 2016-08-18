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
            Activities:
            {day.activities.map(activity => {
              return <li>{activity.name}</li>
            })}
            <hr/>
            Breakfast:
            {day.breakfast.map(breakfast => {
              return <li>{breakfast.name}</li>
            })}
            <hr/>
            Lunch:
            {day.lunch.map(lunch => {
              return <li>{lunch.name}</li>
            })}
            <hr/>
            Dinner:
            {day.dinner.map(dinner => {
              return <li>{dinner.name}</li>
            })}
          </div>
        </FlipCard>
      </div>
    )
  }
}
