import React from 'react'

export default () => {
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
            <li>
              <div className="about-image">
                <img className="rounded-circle img-fluid" src="img/Full-stack.jpg" alt="about"/>
              </div>
              <div className="about-panel">
                <div className="about-heading">
                  <h4>Microverse - 2019-2020</h4>
                  <hr></hr>
                  <h4 className="subheading">The Global School for Remote Software Developers.</h4>
                </div>
                <div className="about-body">
                  <p className="text-muted">The goal of the program is to make you a proficient full-stack web developer with strong team skills
and workflows. You'll learn HTML, CSS, JavaScript, React, Ruby, and Ruby on Rails as  build 30+
projects.</p>
                </div>
              </div>
            </li>
            <li className="about-inverted">
              <div className="about-image">
                <img className="rounded-circle img-fluid" src="img/Full-stack.jpg" alt=""/>
              </div>
              <div className="about-panel">
                <div className="about-heading">
                  <h4>Hillel - 2019</h4>
                  <hr/>
                  <h4 className="subheading">Computer academy</h4>
                </div>
                <div className="about-body">
                  <p className="text-muted">As part of the Front-End Basic course, I studied HTML and CSS. Gained practical skills in the layout of adaptive sites, got acquainted with pre- and postprocessors, CSS frameworks such as Bootstrap.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="about-image">
                <img className="rounded-circle img-fluid" src="img/Full-stack.jpg" alt=""/>
              </div>
              <div className="about-panel">
                <div className="about-heading">
                  <h4>Q-SEO  2016</h4>
                  <hr/>
                  <h4 className="subheading">Digital Agency</h4>
                </div>
                <div className="about-body">
                  <p className="text-muted">SEO course it`s a structured and step-by-step instruction for promoting sites of any type, based on the best knowledge and experience of practicing SEO specialists.</p>
                </div>
              </div>
            </li>
            <li className="about-inverted">
              <div className="about-image">
                <img className="rounded-circle img-fluid" src="img/Full-stack.jpg" alt=""/>
              </div>
              <div className="about-panel">
                <div className="about-heading">
                  <h4>Art People 2012-1017</h4>
                  <hr/>
                  <h4 className="subheading">Art Studio.</h4>
                </div>
                <div className="about-body">
                  <p className="text-muted">Studied the basic techniques of painting, learned about composition, color science, and perspective. I learned to work with a brush and a palette knife.</p>
                </div>
              </div>
            </li>
            <li>
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