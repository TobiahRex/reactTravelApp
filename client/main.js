import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './components/App.js'

render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>        
      </Route>
    </Router>,
  document.getElementById('js-main')
)
