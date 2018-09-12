import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { clearAuthToken } from './auth/localstorage';
import logo from './images/stegato_logo.png';

class Heading extends React.Component {
  logOut() {
    clearAuthToken();
    if (this.props.hasAuthToken === false) {
      return <Redirect to="/logout" />;
    }
    return false;
  }

  render() {
    let logOutButton;
    let dashboardButton;
    let loginButton;
    let registerButton;
    let listItems;
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
          <li><a href="/leaderboard">Leaderboard</a></li>
          <li><a href="/search">Search</a></li>
          <li>{dashboardButton}</li>
          <li>{logOutButton}</li>
        </ul>
      );
    } else {
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
          <li><a href="/leaderboard">Leaderboard</a></li>
          <li><a href="/search">Search</a></li>
          <li>{loginButton}</li>
          <li>{registerButton}</li>
        </ul>
      );
    }
    return (
      <header>
        <div className="container">
          <a href="/">
            <img src={logo} alt="Stegato Logo" className="logo" />
          </a>
          <nav>
            {listItems}
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  name: state.auth.currentUser,
});

export default connect(mapStateToProps)(Heading);
