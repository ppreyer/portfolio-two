import React, { Component } from 'react';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    number: null,
    message: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state.name);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // send data to backend in object
    console.log(this.state);
    this.setState({ name: '', email: '', number: '', message: '' });
  };

  render() {
    return (
      <div id="contactContainer">
        <div id="appContainer">
          <div className="agency-contact-hero">
            <div className="container">
              <h3 className="customFadeInUp">
                Questions, advice or just want to say hi?
              </h3>
            </div>
          </div>

          <div className="agency-contact-intro">
            <div className="container">
              <p>
                For all inquiries including new business, employment
                opportunities or to hear more about our services, please get in
                touch. We'd love to help you learn more about how customers are
                using your products.
              </p>
            </div>
          </div>

          <div className="agency-contact-form">
            <div className="container">
              <form onSubmit={this.handleFormSubmit} method="post">
                <input
                  onChange={this.handleInputChange}
                  name="name"
                  type="text"
                  value={this.state.name}
                  placeholder="Your name"
                />
                <input
                  onChange={this.handleInputChange}
                  name="email"
                  type="text"
                  value={this.state.email}
                  placeholder="Email address"
                />
                <input
                  onChange={this.handleInputChange}
                  name="number"
                  value={this.state.number}
                  type="text"
                  placeholder="Phone number"
                />
                <textarea
                  onChange={this.handleInputChange}
                  name="message"
                  value={this.state.message}
                  placeholder="Message"
                  rows="6"
                />
                <input type="submit" value="Send message" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
