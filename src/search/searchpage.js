import React from 'react';
// import ContactForm from './search/demo/contact-form';
import {Provider} from 'react-redux';
import store from './store';
import Searchsection from './search';

// import registerServiceWorker from './search/demo/registerServiceWorker';


export default function Searchpage() {
    return (
        <Provider store={store}>
            <Searchsection />
        </Provider>
    );
}

