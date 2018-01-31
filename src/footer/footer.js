import React from 'react';
import './footer.css';
import logo from '../images/stegatto_logo2.png'

export default function Footer() {
    return (
        <footer>
            <div className="footer-content-1">
            <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 className="section-heading">Questions about Stegato?</h2>
                            <hr className="primary"></hr>
                            <p className="contactp">If you have any questions regarding this project, feel free to contact Jesse Shaw at any of the points of contact below:</p>
                        </div>
            </div>
            <div className="contactpoints">
            <div className="point-of-contact">
                <i className="fa fa-phone fa-3x sr-contact"></i>
                    <p className="point-of-contact-link">
                        <a href="tel:410-703-6125" >410-703-6125</a>
                    </p>
            </div>
            <div className="point-of-contact">
                <i className="fa fa-envelope-o fa-3x sr-contact"></i>
                    <p className="point-of-contact-link">
                        <a href="mailto:jdshaw1987@gmail.com">jdshaw1987@gmail.com</a>
                    </p>
            </div>
            <div className="point-of-contact">
                <i className="fa fa-github fa-3x sr-contact"></i>
                    <p className="point-of-contact-link">
                        <a href="https://github.com/thejesseshaw" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </p>
            </div>  
            </div>
            <section className="footer-logo">
                <a href="/">
                    <img src={logo} alt="Stegatto Round Logo" className="round-logo"></img>
                </a>
            </section>
            <section className="footer-menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/search">Search</a></li>
            </ul>
            </section>
            </div>
        </footer>
    );
}