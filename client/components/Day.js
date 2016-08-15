import React, { Component } from 'react';
import ClientStore from '../stores/ClientStore';
import FlipCard from 'react-flipcard';

export default class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { day, client } = this.props;
    console.log('day:', day);
    console.log('client:', client);
    return(
      <div className="flipcard">
        <FlipCard>

          <div></div>

          <div>
            activities:
            {day.activities.map(activity => {
              return <li>{activity.name}</li>
            })}
            breakfast:
            {day.breakfast.map(breakfast => {
              return <li>{breakfast.name}</li>
            })}
            lunch:
            {day.lunch.map(lunch => {
              return <li>{lunch.name}</li>
            })}
            dinner:
            {day.dinner.map(dinner => {
              return <li>{dinner.name}</li>
            })}
          </div>
        </FlipCard>
      </div>
    )
  }
}
