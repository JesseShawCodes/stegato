import React from 'react';
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
      fetch(`https://stegato-api.herokuapp.com/music-data/get-data/leaderboard`)
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
      this.fetchMusicData();
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
              console.log('Error');
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
      let message = this.state.cards
      return (
        <div className="dashboard-items">
          {message}
          <NotificationContainer />
        </div>
      );
    }
}
