import React from 'react'

export default () => {
    return (

<section className="about-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="about">
            <li>
              <div className="about-image">
                <img className="rounded-circle img-fluid" src="img/Full-stack.jpg" alt="about"/>
              </div>
              <div className="about-panel">
                <div className="about-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="about-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="about-inverted">
              <div className="about-image">
                <img className="rounded-circle img-fluid" src="img/Full-stack.jpg" alt=""/>
              </div>
              <div className="about-panel">
                <div className="about-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="about-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li>
              <div className="about-image">
                <img className="rounded-circle img-fluid" src="img/Full-stack.jpg" alt=""/>
              </div>
              <div className="about-panel">
                <div className="about-heading">
                  <h4>December 2012</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="about-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="about-inverted">
              <div className="about-image">
                <img className="rounded-circle img-fluid" src="img/Full-stack.jpg" alt=""/>
              </div>
              <div className="about-panel">
                <div className="about-heading">
                  <h4>July 2014</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="about-body">
                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li className="about-inverted">
              <div className="about-codersrank">
              <codersrank-widget username="anna-myzukina"></codersrank-widget>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
          <div className="col-md-6">
        
          </div>
      </div>
    </div>
  </section>

    )
}