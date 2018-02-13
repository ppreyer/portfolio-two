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
              <h1 className="customFadeInUp">We create digital products</h1>
              <p className="customFadeInUp">
                We specialise in designing interfaces, engaging experiences and
                meaningful products
              </p>
              <a href="agency-portfolio-4.html" className="customFadeInUp">
                See our work
              </a>
            </div>
          </section>
        </div>
        <div className="agency-portfolio-hero">
          <section className="container">
            <h1>Showcase of our latest projects</h1>
            <p>
              We believe in simple and efficient ways to grow a business by
              being smart.
            </p>
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

        <div className="index-features-files index-app clearfix">
          <div className="container2">
            <div className="container1">
              <div className="col col-left">
                <div className="features">
                  <div className="feature clearfix">
                    <div className="image">
                      <img src="images/icons/features-icon-upload.png" />
                    </div>
                    <div className="info">
                      <strong>Improve your workflow today</strong>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.
                      </p>
                    </div>
                  </div>
                  <div className="feature clearfix">
                    <div className="image">
                      <img src="images/icons/features-icon-earth.png" />
                    </div>
                    <div className="info">
                      <strong>Your data in the cloud</strong>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.
                      </p>
                    </div>
                  </div>
                  <div className="feature clearfix">
                    <div className="image">
                      <img src="images/icons/features-icon-repeat.png" />
                    </div>
                    <div className="info">
                      <strong>Easy to customize</strong>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-right">
                <div className="info">
                  <h3>Sync your contacts now</h3>
                  <h4>
                    Powerful dashboard that lets you control your site and
                    portfolio.
                  </h4>
                  <p>
                    Spacial has both a web app and an android app to make your
                    website easy and always available. It offers you all the
                    designs in collaboration with some smart people. Your
                    projects will look great everywhere you go. Use new
                    components that come included. It works in all browsers and
                    your clients can pay instantly to everyone.
                  </p>
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
