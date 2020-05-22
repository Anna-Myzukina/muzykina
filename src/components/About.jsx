import React, { Component } from 'react'
import About from './AboutUI';
import content from './DataAbout';

class Abouts extends Component {
  render() {
    return (
      <section className="about-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="about-h3 text-muted">Education.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">

              <ul className="about">
                {(content).map(item => (
                  <li>
                    <About imgsrc={item.img} heading={item.heading} subheading={item.subheading} description={item.description} invert={item.invert}></About>
                  </li>
                ))}
              </ul>

            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="about-codersrank">
                <codersrank-widget username="anna-myzukina"></codersrank-widget>
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}
export default Abouts;