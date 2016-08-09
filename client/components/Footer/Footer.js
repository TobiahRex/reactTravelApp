import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container">
          <span id='copyright-banner' className="copyright text-center col-xs-12">{'\u00a9 2016'}<span className="text-primary"> VapeSwitch</span></span>
        </div>
      </footer>
    )
  }
}

export default Footer
