import React from 'react';
import '../css/main.css';

const About = props => {
    return(
            <div className="col-lg-12">
                <ul className="about">
                    <li className={props.invert}>
                        <div className="about-image">
                            <img className="rounded-circle img-fluid" src={props.imgsrc} alt="about" />
                        </div>
                        <div className="about-panel">
                            <div className="about-heading">
                                <h4>{props.heading}</h4>
                                <hr></hr>
                                <h4 className="subheading">{props.subheading}</h4>
                            </div>
                            <div className="about-body">
                            <p className="text-muted">{props.description}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
    )
}
/*      <div className="row">
      {(content).map(item => (
        <div className="col-lg-12">
          <About imgsrc={item.img} heading={item.heading} subheading={item.subheading} description={item.description}></About>
        </div>
      ))}

      </div>
*/
export default About;