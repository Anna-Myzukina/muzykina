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
                    { props.titles }
                </h4>
                <p className="card-text text-secondary">
                    { props.description }
                </p>
            </div>
            <div className="div skills">

                    {(props.icons).map(item => (
                        <i className={item}></i>
                    ))}
            </div>
            <div className="pb-4">
            <a href={props.href} class="btn btn-outline-success mr-3" target="_blank" rel="noopener noreferrer">View Demo</a>
            <a href={props.source} class="btn btn-outline-success" target="_blank" rel="noopener noreferrer">View Source</a>
            </div>
        </div>
    )
}

export default Project;