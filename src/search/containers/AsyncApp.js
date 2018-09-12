import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import './searchresults.css';
import $ from 'jquery';
import { NotificationContainer, NotificationManager } from 'react-notifications';

// Style Sheet
import 'react-notifications/lib/notifications.css';

// Add material-ui
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Albumrow from '../components/albumrow';
import { searchItunes } from '../actions';

export class AsyncApp extends React.Component {
  search(e) {
    const key = '48a68fa743a6e709380166a2342c0c27';
    const url = 'https://ws.audioscrobbler.com/2.0/';
    const self = this;
    e.preventDefault();
    if (this.input.value.trim() === '') {
      return;
    }
    const settings = {
      artist: `${this.input.value}`,
      api_key: key,
      method: 'artist.getCorrection',
      format: 'json',
      autocorrect: 1,
    };
    $.getJSON(
      url, settings, result => self.props.dispatch(
        searchItunes(result.corrections.correction.artist.name),
      ),
    );
  }

  successMessage() {
    NotificationManager.success('', 'Your rating has been received and your Dashboard has been updated!', 5000);
  }

  loginMessage() {
    NotificationManager.error('Please navigate to the top of the page to login or register.', 'You must be a Stegato user if you want to rate music.', 5000);
  }

  renderResults() {
    if (this.props.loading) {
      return <Spinner fadeIn="none" />;
    }
    if (this.props.error) {
      return <strong className="error-message">{this.props.error}</strong>;
    }
    if (this.props.music === undefined) {
      return <h1>There is a problem reading results from the API</h1>;
    }

    const music = [];
    for (let i = 0; i < this.props.music.length; i += 1) {
      music[i] = (<Albumrow
        key={i}
        artist={this.props.music[i].artistName}
        album={this.props.music[i].collectionName}
        genre={this.props.music[i].primaryGenreName}
        imagelink={this.props.music[i].artworkUrl100}
        buyOnItunes={this.props.music[i].collectionViewUrl}
        collectionId={this.props.music[i].collectionId}
        releaseDate={this.props.music[i].releaseDate}
        user={this.props.user}
        successFunction={this.successMessage}
        loginFunction={this.loginMessage}
      />
      );
    }

    return (
      <div className="search-results-rendered">
        {music}
      </div>
    );
  }

  render() {
    // const { classes } = props;
    return (
      <div className="search-section">
        <NotificationContainer />
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon="+">
            <Typography>Update from September 11, 2018</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Please note. If you are viewing this page from https://stegato.netlify.com/search, you may receive an error when searching for an artist. Please make sure you are viewing this page from http://stegato.netlify.com/search (not https). The iTunes API is currently returning an error when a search is requested from a secure site. We are working on addressing
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <form className="musicsearch" onSubmit={e => this.search(e)}>
          <label htmlFor="artist" className="artist-search-label">
            Artist
            <input
              type="search"
              ref={input => this.input = input}
            />
          </label>
          <button className="search-button" type="submit">Search</button>
        </form>
        {this.renderResults()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  music: state.music,
  loading: state.loading,
  error: state.error,
});


export default connect(mapStateToProps)(AsyncApp);
