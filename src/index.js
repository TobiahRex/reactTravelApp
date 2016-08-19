import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './styles/styles.scss'; // Webpack can import SCSS file too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/fullpage.js/jquery.fullPage.js';
import '../node_modules/fullpage.js/jquery.fullPage.scss';
import '../node_modules/sweetalert/dist/sweetalert.min.js';
import '../node_modules/sweetalert/dist/sweetalert.css';
import '../node_modules/jquery-smooth-scroll/src/jquery.smooth-scroll.js';
import '../node_modules/muicss/react.js';
import '../node_modules/muicss/lib/css/mui.min.css';

const store = configureStore();
// store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);
