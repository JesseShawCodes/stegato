import React from 'react';
import './header.css';
import {connect} from 'react-redux';
import {clearAuth} from './auth/actions/auth';
import {clearAuthToken} from './auth/localstorage';
import logo from './images/stegatto_logo.png'

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
        <header className="heading">
            <div className="container clearfix">
                <h1 id="logo">
                    <a href="/" className="logo">
                    <img src={logo} alt="Stegatto Logo" className="logo" />
                    </a>
                </h1>
                <div className="navigation">
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/search">Search</a>
                    {dashboardButton}
                    {loginButton}
                    {registerButton}
                    {logOutButton}
                </nav>
                </div>
            </div>
        </header>
        )
    };
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    name: state.auth.currentUser
});

export default connect(mapStateToProps)(Heading);
