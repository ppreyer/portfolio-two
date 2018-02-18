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
              <a href="agency-portfolio-4.html" className="customFadeInUp">
                Get in Touch
              </a>
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
              <div class="index-mobile-features">
                <div class="container">
                  <header>
                    <h3>Improve performance with our analytics</h3>
                    <p>
                      There aren't many settings to configure. Just upload your
                      photos and the rest is taken care of automatically.
                    </p>
                  </header>
                  <div class="features clearfix">
                    <div class="feature">
                      <div class="pic">
                        <img
                          src="images/icons/outline-camera.png"
                          class="icon-camera"
                        />
                      </div>
                      <p>Take pictures any given time</p>
                    </div>
                    <div class="feature">
                      <div class="pic">
                        <img
                          src="images/icons/outline-user.png"
                          class="icon-user"
                        />
                      </div>
                      <p>Meet new awesome friends</p>
                    </div>
                    <div class="feature">
                      <div class="pic">
                        <img
                          src="images/icons/outline-cloud.png"
                          class="icon-cloud"
                        />
                      </div>
                      <p>Keep all your files in sync</p>
                    </div>
                    <div class="feature">
                      <div class="pic">
                        <img
                          src="images/icons/outline-mail.png"
                          class="icon-mail"
                        />
                      </div>
                      <p>Contact all your contacts directly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
