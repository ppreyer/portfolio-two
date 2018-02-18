import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const spanStyle = {
  backgroundImage:
    'url(' + 'images/unsplash/photo-1478059425650-ca13d6d422f4.jpg' + ')'
};

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="agency-hero">
          <section className="container">
            <div className="hero-text">
              <p className="customFadeInUp">
                Hi, I'm Parker. I build and design web applications.
              </p>
              <Link to="/contact" className="customFadeInUp">
                Get in Touch
              </Link>
            </div>
          </section>
        </div>
        <div className="agency-portfolio-hero">
          <section className="container">
            <h1>My Latest Projects</h1>
            <p>Want to see more examples? Email me.</p>
          </section>
        </div>

        <div className="agency-portfolio-gallery">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-md-6">
                <a href="agency-project.html" className="project">
                  <span className="mask">
                    <span className="info">
                      <h3>Landscape Trip</h3>
                      <p>Blog About spacial trips</p>
                    </span>
                    <span className="btn-see-project">See project</span>
                  </span>
                  <span style={spanStyle} className="pic" />
                </a>
              </div>
              <div className="col-md-6">
                <a href="agency-project.html" className="project">
                  <span className="mask">
                    <span className="info">
                      <h3>Landscape Trip</h3>
                      <p>Blog About spacial trips</p>
                    </span>
                    <span className="btn-see-project">See project</span>
                  </span>
                  <span style={spanStyle} className="pic" />
                </a>
              </div>
              <div className="col-md-6">
                <a href="agency-project.html" className="project">
                  <span className="mask">
                    <span className="info">
                      <h3>Landscape Trip</h3>
                      <p>Blog About spacial trips</p>
                    </span>
                    <span className="btn-see-project">See project</span>
                  </span>
                  <span style={spanStyle} className="pic" />
                </a>
              </div>
              <div className="col-md-6">
                <a href="agency-project.html" className="project">
                  <span className="mask">
                    <span className="info">
                      <h3>Landscape Trip</h3>
                      <p>Blog About spacial trips</p>
                    </span>
                    <span className="btn-see-project">See project</span>
                  </span>
                  <span style={spanStyle} className="pic" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
