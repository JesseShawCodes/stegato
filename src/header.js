import React from 'react';
import './header.css';
import {connect} from 'react-redux';
import {clearAuth} from './auth/actions/auth';
import {clearAuthToken} from './auth/localstorage';


export class Heading extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOutButton;
        let dashboardButton;
        let loginButton;
        let registerButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <a href="/logout" onClick={() => this.logOut()}>Logout</a>
            );
            dashboardButton = (
                <a href="/dashboard">Dashboard</a>
            );
        }
        else {
            loginButton = (
                <a href="/login">Login</a>
            );
            registerButton = (
                <a href="/register">Register</a>
            );
        }
        return (
        <header>
            <div className="container clearfix">
                <h1 id="logo">
                    <a href="/" className="logo">
                    Stegato
                    </a>
                </h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/search">Search</a>
                    {dashboardButton}
                    {loginButton}
                    {registerButton}
                    {logOutButton}
                </nav>
            </div>
        </header>
        )
    };
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Heading);
