import React from 'react';
import Splash from './splash';
import Howto from './howto';
import Registerroot from './auth/register/root'

export default function Landingpage() {
    return (
            <div id="main">
                <Splash />
                <Howto />
                <Registerroot />
            </div>
    );
}

