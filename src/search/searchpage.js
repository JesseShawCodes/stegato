import React from 'react';
// import ContactForm from './search/demo/contact-form';
import {Provider} from 'react-redux';
import store from './store';
import Searchresultsstatic from './searchresults';

// import registerServiceWorker from './search/demo/registerServiceWorker';


export default function Searchpage() {
    return (
        <Provider store={store}>
            <Searchresultsstatic />
        </Provider>
    );
}

