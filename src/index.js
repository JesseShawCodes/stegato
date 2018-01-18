import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from './header.js';
import Landingpage from './landingpage.js';
import Logoutpage from './auth/logout/logoutpage';
import SearchRoot from './search/containers/root';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboardpage from './dashboard/dashboard';
import Footer from './footer/footer';
import Registerroot from './auth/register/root';
import { Provider } from 'react-redux'
import store from './auth/store'
import Loginroot from './auth/login/root';


ReactDOM.render(
    <Router>
    <main>
        <div className="heading">
        <Provider store={store}>
            <Heading />
        </Provider>
        </div>
        <div id="main">
            <Route exact path="/" component={Landingpage} />
            <Route exact path="/login/" component={Loginroot} />
            <Route exact path="/register/" component={Registerroot} />
            <Route exact path="/search/" component={SearchRoot} />
            <Route exact path="/logout/" component={Logoutpage} />
            <Route exact path="/dashboard/" component={Dashboardpage} />
        </div>
        <Footer />
    </main>
    </Router>, 
    document.getElementById('root')
);


