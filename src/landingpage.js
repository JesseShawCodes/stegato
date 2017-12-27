import React from 'react';
// import ContactForm from './search/demo/contact-form';
import Splash from './splash';
import Howto from './howto';
import Signup from './signup';
// import registerServiceWorker from './search/demo/registerServiceWorker';

export default function Landingpage() {
    return (
            <div id="main">
                <Splash />
                <Howto />
                <Signup />
            </div>
    );
}

