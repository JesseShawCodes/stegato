import React from 'react';
import Heading from './header.js';
import Searchbar from './search';
import Splash from './splash';
import Footer from './footer';
import Howto from './howto';
import Signup from './signup';

export default function Landingpage() {
    return (
        <main>
            <div className="heading">
                <Heading />
            </div>
            <div id="main">
                <Splash />
                <Howto />
                <Signup />
                <Searchbar />
            </div>
                <Footer />
        </main>
    );
}
