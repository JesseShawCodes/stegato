import React from 'react';
import { connect } from 'react-redux';
import {searchItunes} from '../actions';
import Spinner from 'react-spinkit';
import Albumrow from '../components/albumrow';
import './searchresults.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


export class AsyncApp extends React.Component {
    renderResults() {
        if (this.props.loading) {
            return <Spinner fadeIn="none" />;
        }
        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }
        if (this.props.music === undefined) {
            return <h1>There is a problem reading results from the API</h1>
        };

        const music = []
        for (var i = 0; i < this.props.music.length; i++) {
            if (this.props.music[i].collectionName === undefined) {
                continue
            }
            music[i] = <Albumrow key={i} 
                                artist={this.props.music[i].artistName} 
                                album={this.props.music[i].collectionName}
                                genre={this.props.music[i].primaryGenreName} 
                                imagelink={this.props.music[i].artworkUrl100}
                                buyOnItunes={this.props.music[i].collectionViewUrl}
                                collectionId={this.props.music[i].collectionId}
                                user={this.props.user}
                                successFunction={this.successMessage}
                                loginFunction={this.loginMessage}
                        />
        }

        return (
            <div className="search-results-rendered">
            {music}
            </div>
        )
        
    }

    search(e) {
        e.preventDefault();
        if (this.input.value.trim() === '') {
            return;
        }
        this.props.dispatch(searchItunes(this.input.value));
    }

    successMessage() {
        console.log("Success message triggered");
        NotificationManager.success('', 'Your rating has been received and your Dashboard has been updated!', 5000, () => {
            alert('callback');
        })
    }

    loginMessage() {
        console.log("Login Message has been triggered");
        NotificationManager.error('Please navigate to the top of the page to login or register.', 'You must be a Stegato user if you want to rate music.', 5000, () => {
            alert('callback');
        })
    }

    render() {
        return (
            <div className="search-section">
            <NotificationContainer />
            <form className="musicsearch" onSubmit={(e) => this.search(e)}>
                <label htmlFor="artist" className="artist-search-label">Artist</label>
                <input type="search" ref={input => this.input = input} />
                <button className="search-button">Search</button>
            </form>
            {this.renderResults()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    music: state.music,
    loading: state.loading,
    error: state.error
});


export default connect(mapStateToProps)(AsyncApp);