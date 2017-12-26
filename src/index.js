import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from './header.js';
import Landingpage from './landingpage.js';
import Loginpage from './loginpage';
import Registerpage from './registerpage.js';
import Searchpage from './search/searchpage';
import Logoutpage from './logout/logoutpage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboardpage from './dashboard/dashboard';
import Footer from './footer';
// import {Provider} from 'react-redux';
// import store from './search/store';

ReactDOM.render(
    <Router>
    <main>
        <div className="heading">
            <Heading />
        </div>
        <div id="main">
            <Route exact path="/" component={Landingpage} />
            <Route exact path="/login" component={Loginpage} />
            <Route exact path="/register" component={Registerpage} />
            <Route exact path="/search" component={Searchpage} />
            <Route exact path="/logout" component={Logoutpage} />
            <Route exact path="/dashboard" component={Dashboardpage} />
        </div>
        <Footer />
    </main>
    </Router>, 
    document.getElementById('root')
);


