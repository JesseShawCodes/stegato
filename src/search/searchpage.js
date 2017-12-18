import React from 'react';
// import ContactForm from './search/demo/contact-form';
import {Provider} from 'react-redux';
import Footer from '../footer';
import store from './store';
import Searchsection from './search';

// import registerServiceWorker from './search/demo/registerServiceWorker';


export default function Searchpage() {
    return (
            <div id="main">
                <Provider store={store}>
                    <Searchsection />
                </Provider>
                <Footer />
            </div>
    );
}

