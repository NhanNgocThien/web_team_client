import React from 'react';
import "./Intro.scss";

import Avatar from '../../images/avatar-1.svg';

const Intro: React.FC = () => {
    return(
        <div id="section-intro">
            <section id="intro" className="intro d-flex align-items-center">
                <div className="container">
                    <div className="intro-wrapper">
                        <img src={Avatar} className="mb-4" />
                        <h1 className="mb-2 mt-0">TKKT Team</h1>
                        <p>We are number one</p>
                        <ul className="social-icons light list-inline mb-0 mt-4">
                            <li className="list-inline-item">
                                <a href=""><i className="fa fa-instagram"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href=""><i className="fa fa-twitter"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href=""><i className="fa fa-linkedin"></i></a>
                            </li>
                            <li className="list-inline-item">
                                <a href=""><i className="fa fa-github"></i></a>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <a href="" className="btn btn-default">Hire me</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )   
}

export default Intro;