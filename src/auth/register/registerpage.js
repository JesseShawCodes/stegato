import React from 'react';
import {connect, Provider} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import store from '../store'

import Signup from './signup';

export function Registerpage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/search" />;
    }
    return (
        <Provider store={store}>
        <div className="home">
            <h2>Register for Stegato</h2>
            <Signup />
            <div className="already-user">
            Already registered? click <Link to="/login">here</Link> to login!
            </div>
        </div>
        </Provider>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    user: state.auth.currentUser
});

export default connect(mapStateToProps)(Registerpage);