import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlipCard from 'react-flipcard';

export default class Day extends Component {
  constructor(props, context) {
    super(props, context);

    this.renderData = this.renderData.bind(this);
  }

  renderData(dataObj, index) {
    return (
      <li key={index} >{dataObj.name}</li>
    );
  }

  render() {
    const { day, client, num } = this.props;
    return (
      <div className="flipcard">
        <FlipCard>

          <div className="flipcard-front">

            <i className="fa fa-calendar-o" aria-hidden="true" />
            <p>Day {num}</p>
          </div>

          <div>
            Activities:
            {day.activities.map(this.renderData)}
            <hr />
            Breakfast:
            {day.breakfast.map(this.renderData)}
            <hr />
            Lunch:
            {day.lunch.map(this.renderData)}
            <hr />
            Dinner:
            {day.dinner.map(this.renderData)}
          </div>
        </FlipCard>
      </div>
    );
  }
}

Day.propTypes = {
  day: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired,
  num: PropTypes.number.isRequired,
};
