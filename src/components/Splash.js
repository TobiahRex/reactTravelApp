import React from 'react';

export default function Splash() {
  return (
    <div className="section splash" data-anchor='splash'>
      <div className="splash-container">
        <div className="splash-container-contain">
          <i className="fa fa-map" aria-hidden="true" />
          <div className="brand">itiner-ez</div> itineraries made easy
        </div>
      </div>
      <footer className="footer arrow bounce">
        <a href="#questionnaire" className="smooth-scroll">
          <i className="fa fa-angle-down" aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}
