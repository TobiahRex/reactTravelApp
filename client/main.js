import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './components/App.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import About from './components/About/About.js'

render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="about" component={About} />
      </Route>
    </Router>,
  document.getElementById('js-main')
)
