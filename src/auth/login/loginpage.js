import React from 'react';
// import ContactForm from './search/demo/contact-form';
import Footer from './footer/footer';
import Login from './login';
// import registerServiceWorker from './search/demo/registerServiceWorker';

/*

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
                <Provider store={store}>
                    <Searchsection />
                </Provider>
                <Footer />
            </div>
        </main>
    );
}

*/

export default function Loginpage() {
    return (
            <div id="main">
                <Login />
                <Footer />
            </div>
    );
}

