import React from 'react';
import './rating.css'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


export default class Rating extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: undefined
        }
        this.fiveStars = this.fiveStars.bind(this)
        this.fourStars = this.fourStars.bind(this)
        this.threeStars = this.threeStars.bind(this)
        this.twoStars = this.twoStars.bind(this)
        this.oneStars = this.oneStars.bind(this)
        this.submitRating = this.submitRating.bind(this)
    }

    fiveStars() {
        this.setState({
            rating: 5
        })
    }

    fourStars() {
        this.setState({
            rating: 4
        })
    }

    threeStars() {
        this.setState({
            rating: 3
        })
    }

    twoStars() {
        this.setState({
            rating: 2
        })
    }

    oneStars() {
        this.setState({
            rating: 1
        })
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
          }
        };
    };

    submitRating() {
        console.log("Submitting Rating")
        if (this.props.username === undefined) {
            console.log("Not logged In");
            NotificationManager.error('Please navigate to the top of the page to login or register.', 'You must be a Stegatto user if you want to rate music.', 5000, () => {
                alert('callback');
            });
        }
        else {
            var submission = {
                artist: this.props.Artist,
                album: this.props.Album,
                genre: this.props.Genre,
                rating: this.state.rating,
                artwork: this.props.Artwork,
                itunesLink: this.props.buyOnItunes,
                user: this.props.user.username,
                collectionid: this.props.collectionId
            }
            fetch(`http://localhost:8080/music-data/${submission.user}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'Artist': `${submission.artist}`,
                    'album': `${submission.album}`,
                    'Genre': `${submission.genre}`,
                    'Rating': `${submission.rating}`,
                    'artwork': `${submission.artwork}`,
                    'BuyOnItunes': `${submission.itunesLink}`,
                    'user': `${submission.user}`,
                    "collectionid": `${submission.collectionid}`
                })
            })
        }
    }

    reRender() {
        if (this.state.rating !== undefined) {
            let submit =    
                        <div className="submit-rating">
                            <button 
                                    type="button" 
                                    className="submit-rating-button"
                                    onClick={this.submitRating}
                            >Submit
                            </button>   
                        </div>
            return submit
        }
    }

    render() {
        return (
            <section className="rating-add">
            <div className="rating">
                <span className="five-star" onClick={this.fiveStars} value={5}>☆</span>
                <span className="four-star" onClick={this.fourStars} value={4}>☆</span>
                <span className="three-star" onClick={this.threeStars} value={3}>☆</span>
                <span className="two-star" onClick={this.twoStars} value={2}>☆</span>
                <span className="one-star" onClick={this.oneStars} value={1}>☆</span>
            </div>
            {this.reRender()}
            <NotificationContainer />
            </section>
        );
    }
}