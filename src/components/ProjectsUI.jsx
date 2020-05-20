import React from 'react';
import '../css/main.css';

const Project = props => {
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={ props.imgsrc } alt="projects" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    facebook-clone
                </h4>
                <p className="card-text text-secondary">
                    Description
                </p>
                <a href="/" class="btn btn-outline-success">Preview</a>
            </div>
        </div>
    )
}

export default Project;