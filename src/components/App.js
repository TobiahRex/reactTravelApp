
import React, { Component } from 'react';
// import $ from 'jquery';
import Splash from './Splash.js';
import Who from './Who.js';
import When from './When.js';
import Where from './Where.js';
import Questionnaire from './Questionnaire.js';


export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      location: ''
    }

    this._setLocation = this._setLocation.bind(this);
  }

  _setLocation(){
    let location = this.props.location.hash;
    this.setState({ location });
  }

  componentDidMount() {
    $('#fullpage').fullpage({
      anchors: ['splash', 'questionnaire'],
      sectionsColor: ['#121b3e'],
      css3: true,
      scrollingSpeed: 1000,
      afterSlideLoad: this._setLocation,
    })
  }

  render() {
    console.log('this.state.location: ', this.state);
    return (
      <div id='fullpage'>
        <Splash></Splash>
        <Questionnaire></Questionnaire>
      </div>
    )
  }
}
