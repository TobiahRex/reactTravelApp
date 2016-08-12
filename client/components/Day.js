import React, { Component } from 'react';
import ClientStore from '../stores/ClientStore';


export default class Day extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let day = this.props.day;
    console.log('day:', day);
    return(
      <div>
        Yo
      </div>
    )
  }
}
