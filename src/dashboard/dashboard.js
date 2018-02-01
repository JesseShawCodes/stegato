import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../auth/requires-login';
import Dashboardalbums from './dashboardalbums';
import './dashboard.css';
import fetch from 'cross-fetch';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export class Dashboardpage extends React.Component {
    constructor() {
      super();
      this.state = {
        cards: []
      }
    }
    
    createNotification = (type) => {
      return () => {
        switch (type) {
          case 'info':
            NotificationManager.info('Info message');
            break;
          case 'success':
            NotificationManager.success('Success message', 'Title here');
            break;
          case 'warning':
            NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
            break;
          case 'error':
            NotificationManager.error('Error message', 'Click me!', 5000, () => {
              alert('callback');
            });
            break;
          default: 
            //do Nothing
        }
      };
    };

    componentDidMount() {
      // let cards
      fetch(`http://localhost:8080/music-data/${this.props.username}`)
        .then(results => {
          return results.json()
        })
        .then(data => {
          let results = []
          for (var i = 0; i < data.length; i++) {
            console.log(data[i]._id);
            results[i] = <Dashboardalbums key={i} 
                                          artist={data[i].artist}     
                                          album={data[i].album} 
                                          genre={data[i].genre} 
                                          imagelink={data[i].artwork} 
                                          buyOnItunes={data[i].itunesLink} 
                                          rating={data[i].rating} 
                                          collectionId={data[i].collectionId} 
                                          user={data[i].user} 
                                          mongoId={data[i]._id} 
                                          callback={this.render()}
                          />
          }
          this.setState({cards: results})
        })
    }

    render() {
      // let cards
      if (this.state.cards.length === 0) {
        var message = 
          <div className="initial-greeting">
            <h1>Welcome to Stegato!</h1>
            <section className="welcome-message">
              <p>To add rate and add music to your dashboard, search for music <a href="/search" className="first-search">here</a>.</p>
            </section>
          </div>
      }
      else {
        var message = this.state.cards
      }
      return (
        <div className="dashboard-items">
          {message}
          <NotificationContainer />
        </div>
      );
    }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
      username: state.auth.currentUser.username,
      name: `${currentUser.firstName} ${currentUser.lastName}`,
      protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboardpage));