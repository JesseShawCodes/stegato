import React from 'react';
import Heading from './header.js';
import Searchsection from './search';
import Splash from './splash';
import Footer from './footer';
import Howto from './howto';
import Signup from './signup';
import Login from './login';

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
                <Login />
                <Searchsection />
                <Footer />
            </div>
        </main>
    );
}
