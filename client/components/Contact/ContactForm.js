import React, { Component } from 'react'
import toastr from 'toastr'

// TODO add ContactActions for Submitting new Email

// import ContactActions from '../../src/actions/ServerActions.js'
export default class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      body: '',
      copy: true,
    }
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(event) {
    event.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.body){
      return toastr.error('Please provide ALL your contact information.', 'MISSING REQUIRED FIELDS');
    }
    toastr.success('Youre message was sent to VapeSwitch. Thanks!', 'SENT');
    this.setState({ name: '', email: '', body: '', copy: true });
  }

  render() {
    return (
      <div className="col-xs-8 col-xs-offset-2 container">
        <br />
        <form>
          <div className="form-group row col-xs-6 col-xs-offset-3">
            <label htmlFor="contact-name">Your Name</label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              id="contact-name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              />
          </div>
          <div className="form-group col-xs-6 col-xs-offset-3">
            <label htmlFor="contact-email">Your Email</label>
            <input
              type="text"
              placeholder="tony.stark@gmail.com"
              className="form-control"
              id="contact-email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              />
          </div>
          <div className="form-group">
            <textarea
              value={this.state.body}
              onChange={e => this.setState({ body: e.target.value })}
              className="form-control"
              id="contact-email-body"
              cols="25"
              rows="10"></textarea>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Copy Sent To Your Email?</label>
            <div className="col-lg-10">
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    id="email-copy-checkbox-inline"
                    onChange={e => this.setState({ copy: e.target.checked })}
                    checked={this.state.copy} />
                  Yes
                </label>
              </div>
            </div>
          </div>
          <button
            onClick={this.sendEmail}
            className="btn btn-lg btn-primary">Send</button>
        </form>
      </div>
    )
  }
}
