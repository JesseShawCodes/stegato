import React from 'react';
import './howto.css';
import image1 from '../images/IMG_5489.PNG'
import image2 from '../images/IMG_5490.PNG'
import image3 from '../images/IMG_5491.PNG'

export default function Howto() {
    return (
        <section className="how-to">
        <h2>How to Use this App</h2>
            <section>
            <p>Stegato was created as an application to rate all of your music.</p>
            <p>After registering your account, you will be able to search and rate all music that is in the iTunes database. When your rating is submitted, that album is added to your music dashboard.</p>
            <section className="directions">
            <h3>Search for an artist</h3>
            <img src={image1} className="screenshot" alt="screenshot 1"></img>
            <h3>Rate the project</h3>
            <img src={image2} className="screenshot" alt="screenshot 2"></img>
            <h3>Submit it to your dashboard and the Stegato database</h3>
            <img src={image3} className="screenshot" alt="screenshot 3"></img>
            </section>
            <p>After rating an artist’s project, you can see on the leaderboard where your project ranks within the Stegato community leaderboard.</p>
            <p>This application is powered by iTunes and last.fm API’s.</p>
            </section>
        </section>
    );
}

