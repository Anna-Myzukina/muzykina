import React, { Component } from 'react'
import Project from './ProjectsUI';

import img1 from '../img/events.png';
import img2 from '../img/facebook.png';
import img3 from '../img/groupon.png';
import img4 from '../img/newsweek.png';
import img5 from '../img/project-1.png';
import img6 from '../img/events.png';

class Projects extends Component {
    render() {
        return (
            <div className="container projects-section" id="projects">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Projects</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <Project imgsrc={img1}></Project>
                    </div>
                    <div className="col-md-4">
                        <Project imgsrc={img2}></Project>
                    </div>
                    <div className="col-md-4">
                        <Project imgsrc={img3}></Project>
                    </div>
                    <div className="col-md-4">
                        <Project imgsrc={img4}></Project>
                    </div>
                    <div className="col-md-4">
                        <Project imgsrc={img5}></Project>
                    </div>
                    <div className="col-md-4">
                        <Project imgsrc={img6}></Project>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;