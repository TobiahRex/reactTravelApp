import React, { Component } from 'react';

export default class Intro extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="slide">
        <div className="intro">
          <h1>Intro</h1>
          <p>Not only vertical scrolling but also horizontal scrolling. With fullPage.js you will be able to add horizontal sliders in the most simple way ever.
          </p>
        </div>
       </div>
    )
  }
}
