import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from '../auth/requires-login';
import Dashboardalbums from './dashboardalbums';
import './dashboard.css';
import fetch from 'cross-fetch';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export class Dashboardpage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cards: [],
        reloading: false
      }
      this.updateDashboard = this.updateDashboard.bind(this);
      this.updateDashboardTest = this.updateDashboardTest.bind(this);
      this.fetchMusicData = this.fetchMusicData.bind(this);
    }

    updateDashboardTest() {
      setTimeout( function() {
        this.setState({reloading: true})
      }.bind(this), 3000
      )
    }

    fetchMusicData() {
      console.log("Fetching Data...")
      fetch(`https://stegato-api.herokuapp.com/music-data/${this.props.username}`)
      .then(results => {
        return results.json()
      })
      .then(data => {
        let results = []
        for (var i = 0; i < data.length; i++) {
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
                                        updateDashboard={this.updateDashboardTest} 
                        />
        }
        this.setState({
          cards: results,
          reloading: false
        })
      })
    }
    
    updateDashboard() {
      console.log("Updating Dashboard...");
      this.fetchMusicData();
    }

    deleteMessage() {
      console.log("Delete message...")
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
      this.fetchMusicData()
    }

    render() {
      let message
      if (this.state.cards.length === 0) {
        message = 
          <div className="initial-greeting">
            <h1>Welcome to Stegato!</h1>
            <section className="welcome-message">
              <p>To add rate and add music to your dashboard, search for music <a href="/search" className="first-search">here</a>.</p>
            </section>
          </div>
      }
      else if (this.state.reloading === true) {
        this.updateDashboard()
      }
      else {
        message = this.state.cards
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
      protectedData: state.protectedData.data,
      reloading: state.reloading
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboardpage));