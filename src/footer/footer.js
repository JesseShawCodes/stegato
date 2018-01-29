import React from 'react';
import './footer.css';
import logo from '../images/stegatto_logo2.png'

export default function Footer() {
    return (
        <footer>
            <div className="footer-content-1">
            <img src={logo} alt="Stegatto Round Logo" className="round-logo"></img>
            </div>
        </footer>
    );
}