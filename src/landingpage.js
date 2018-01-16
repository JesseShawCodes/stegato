import React from 'react';
import Splash from './splash';
import Howto from './howto';
import Signup from './auth/register/signup'

export default function Landingpage() {
    return (
            <div id="main">
                <Splash />
                <Howto />
                <Signup />
            </div>
    );
}

