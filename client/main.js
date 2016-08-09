import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import style from './styles/main.scss';


// where App will be the whole search form
import App from './components/App.js';
import Splash from './components/Splash.js';
import Who from './components/Who.js';
import When from './components/When.js';
import Where from './components/Where.js';

// where itinerary will be the rendered itinerary
import Itinerary from './components/Itinerary.js';


render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path='splash' component={Splash} />
        <Route path='who' component={Who} />
        <Route path='when' component={When} />
        <Route path='where' component={Where} />
      </Route>
      <Route path='itinerary' component={Itinerary} />
    </Router>,
  document.getElementById('js-main')
)
