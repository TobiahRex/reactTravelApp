import React from 'react'
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import Splash from './components/Splash.js';
import Who from './components/Who.js';
import When from './components/When.js';
import Where from './components/Where.js';
import Itinerary from './components/Itinerary.js';

export default (
  <Route path="/" component={App}>
    <Route path="splash'" component={Splash} />
    <Route path='who' component={Who} />
    <Route path='when' component={When} />
    <Route path='where' component={Where} />
    <Route path='itinerary' component={Itinerary} />
  </Route>
);
