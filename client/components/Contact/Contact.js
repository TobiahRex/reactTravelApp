import React, { Component } from 'react'

import ContactForm from './ContactForm.js'

export default class Properties extends Component {
  render() {
    return (
      <div id='contact-container' className="text-center">
        <h1>Contact</h1>
        <ContactForm />
      </div>
    )
  }
}
