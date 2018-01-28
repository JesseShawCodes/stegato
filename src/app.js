import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './index.css';
import Heading from './header.js';
import Landingpage from './landingpage.js';
import Logoutpage from './auth/logout/logoutpage';
import SearchRoot from './search/containers/root';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './footer/footer';
import Registerroot from './auth/register/root';
import { Provider } from 'react-redux'
import store from './store'
import Loginroot from './auth/login/root';
import Dashboardroot from './dashboard/root';
import Howto from './how to/how-to'
import {refreshAuthToken} from './auth/actions/auth'

export class App extends React.Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn && !this.props.loggedIn) {
            // When we are logged in, refresh the auth token periodically
            this.startPeriodicRefresh();
        } else if ( !nextProps.loggedIn && this.props.loggedIn) {
            // Stop refreshing when we log out
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            60 * 60 * 1000 // One hour
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        var user = this.props.user
        console.log(user)
        return (
            <Router>
            <main>
                    <Heading />
                    <Route exact path="/" component={Landingpage} />
                    <Route exact path="/about" component={Howto} />
                    <Route exact path="/login/" component={Loginroot} />
                    <Route exact path="/register/" component={Registerroot} />
                    <Route exact path="/search/" component={SearchRoot} user={user}/>
                    <Route exact path="/logout/" component={Logoutpage} />
                    <Route exact path="/dashboard/" component={Dashboardroot} />
                <Footer />
            </main>
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null,
    user: state.auth.currentUser
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
