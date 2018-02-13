import React, { Component } from 'react';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Website extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
          <div className="agency-footer">
            <a href="#" className="go-top">
              <i className="fa fa-angle-up" />
              TOP
            </a>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h4>Learn More</h4>
                  <Link to="/home" className="legal">
                    Home
                  </Link>
                  <Link to="/contact" className="legal">
                    Contact Page
                  </Link>
                </div>
                <div className="col-md-3">
                  <h4>Address</h4>
                  <p>
                    530 Foster Street, <br />
                    Durham, NC, 27701
                  </p>
                </div>
                <div className="col-md-3">
                  <h4>Contact</h4>
                  <p>(919) 740-4206 parker.preyer1@gmail.com</p>
                </div>
                <div className="col-md-3">
                  <h4>Social</h4>
                  <Link
                    to="https://www.linkedin.com/in/parkerpreyer/"
                    target="_blank"
                    className="social first"
                  >
                    <i className="fa fa-linkedin" />
                  </Link>
                  <Link
                    to="https://twitter.com/ParkerPreyer"
                    target="_blank"
                    className="social"
                  >
                    <i className="fa fa-twitter" />
                  </Link>
                  <Link
                    to="https://github.com/ppreyer"
                    target="_blank"
                    className="social"
                  >
                    <i className="fa fa-github" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Website;
