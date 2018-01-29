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
        let listItems
        if (this.props.loggedIn) {
            logOutButton = (
                <a href="/logout" onClick={() => this.logOut()}>Logout</a>
            );
            dashboardButton = (
                <a href="/dashboard">Dashboard</a>
            );
            listItems = (
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/search">Search</a></li>
                <li>{dashboardButton}</li>
                <li>{logOutButton}</li>
            </ul>
            );
        }
        else {
            loginButton = (
                <a href="/login">Login</a>
            );
            registerButton = (
                <a href="/register">Register</a>
            );
            listItems = (
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/search">Search</a></li>
                    <li>{loginButton}</li>
                    <li>{registerButton}</li>
                </ul>
            )
        }
        return (
            <header>
                <div className="container">
                <img src={logo} alt="Stegatto Logo" className="logo" />
                <nav>
                    {listItems}
                </nav>
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
