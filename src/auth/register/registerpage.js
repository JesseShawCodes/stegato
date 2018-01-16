import React from 'react';
import Signup from '../register/signup';
import store from '../store.js'

export default function Registerpage() {
    return (
            <Provider store={store}>
                <Signup />
            </Provider>
    );
}

