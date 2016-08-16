
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
  }

  componentDidMount() {
    $('#fullpage').fullpage({
      anchors: ['splash', 'questionnaire'],
      sectionsColor: ['#121b3e'],
      css3: true,
      scrollingSpeed: 1000,
      afterSlideLoad: () => console.log(this.props.location.hash)
    })
  }

  render() {

    return (
      <div id='fullpage'>
        <Splash></Splash>
        <Questionnaire></Questionnaire>
      </div>
    )
  }
}
