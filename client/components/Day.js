import React, { Component } from 'react';
import ClientStore from '../stores/ClientStore';
import $ from 'jquery';

export default class Day extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('#card').flip('toggle');
  }

  render() {
    let day = this.props.day;
    console.log('day:', day);
    return(
      <div id="card">
        <div class="front">
          Front content
        </div>
        <div class="back">
          Back content
        </div>
      </div>
    )
  }
}
