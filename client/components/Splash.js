import React, { Component } from 'react';

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="section splash" data-anchor='splash'>
        <div className="splash-container">
          <div className="splash-container-contain">
            <i className="fa fa-taxi" aria-hidden="true"></i>

            <div className="brand">itiner-ez</div> itineraries made easy
          </div>

          <footer className="footer">
            <a href="#questionnaire" className="smooth-scroll">
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </a>
          </footer>

        </div>

      </div>
    )
  }
}
