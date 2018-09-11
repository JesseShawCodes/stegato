import React from 'react';
import './splash.css';
import splashImage from './images/splash.jpg';

export default function Splash() {
  return (
    <div className="splash">
      <img src={splashImage} className="splash-image" alt="Shelf of records"></img>
    </div>
  );
}
