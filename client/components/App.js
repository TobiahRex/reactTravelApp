import React, { Component } from 'react'
import NavBar from './Navbar/Navbar.js'
import Footer from './Footer/Footer.js'
export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id="main-container">
        <div className="text-center">
          <NavBar />
          <div className="container">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
