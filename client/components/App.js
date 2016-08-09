import React, { Component } from 'react';
import $ from 'jquery';
import { SectionsContainer, Section } from 'react-fullpage';
import Splash from './Splash.js';
import Who from './Who.js';
import When from './When.js';
import Where from './Where.js';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // $('#fullpage').fullpage({
    //   anchors: ['splash', 'who', 'when', 'where']
    // })
  }

  render() {
    let options = {
      anchors: ['splash', 'who', 'when', 'where'],
      sectionClassName: "section"
    }

    return (
      <div id='fullpage'>
        <Splash></Splash>
        <Who></Who>
        <When></When>
        <Where></Where>
      </div>
    )
  }
}
