import React from 'react';
import Heading from './header.js';
import Searchbar from './search';

export default function Landingpage() {
    return (
        <main>
            <div className="heading">
                <Heading />
            </div>
            <div id="main">
                <Searchbar />
            </div>
        </main>
    );
}
