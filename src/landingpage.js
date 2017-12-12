import React from 'react';
import Heading from './header.js';
import Searchbar from './search';
import Splash from './splash';

export default function Landingpage() {
    return (
        <main>
            <div className="heading">
                <Heading />
            </div>
            <div id="main">
                <Splash />
                <Searchbar />
            </div>
        </main>
    );
}
