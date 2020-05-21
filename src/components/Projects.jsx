import React, { Component } from 'react'
import Project from './ProjectsUI';
import content from './DataProject';


class Projects extends Component {
    render() {
        return (
            <div className="container projects-section" id="projects">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Projects</h2>
                        <h3 className="projects-h3 text-muted">Few projects to show my skills and experience.</h3>
                    </div>
                </div>

                <div className="row">
                    {(content).map(item => (
                        <div className="col-md-4">
                            <Project titles={item.title} imgsrc={item.img} description={item.text} href={item.href} source={item.source}></Project>
                        </div>
                    ))}
                    
                </div>
            </div>
        );
    }
}

export default Projects;