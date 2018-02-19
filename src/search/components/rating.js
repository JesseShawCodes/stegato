import React from 'react';
import './rating.css'

export default class Rating extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: undefined,
            ratingsStyle:   <section className="rating">
                                <span className="five-star" onClick={this.fiveStars} value={5}>☆</span>
                                <span className="four-star" onClick={this.fourStars} value={4}>☆</span>
                                <span className="three-star" onClick={this.threeStars} value={3}>☆</span>
                                <span className="two-star" onClick={this.twoStars} value={2}>☆</span>
                                <span className="one-star" onClick={this.oneStars} value={1}>☆</span>
                            </section>
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
            rating: 4,
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
    
    submitRating() {
        let baseUrl = "http://localhost:8080"
        if (this.props.user === undefined || this.props.user === null) {
            this.props.loginMessage()
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
                collectionid: this.props.collectionId,
                releaseDate: this.props.releaseDate
            }
            fetch(`https://stegato-api.herokuapp.com/music-data/${submission.user}`, {
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
                    "collectionid": `${submission.collectionid}`,
                    "releaseDate": `${submission.releaseDate}`
                })
            }).then(
                this.props.successMessage()
            )
            .then(
                this.setState({rating: undefined})
            )
        }
    }

    reRender() {
        if (this.state.rating !== undefined) {
            let submit =  
                        <section className="rating-submited">
                        <div className="rating-pending">
                            {this.state.rating}
                        </div>  
                        <div className="submit-rating">
                            <button 
                                    type="button" 
                                    className="submit-rating-button"
                                    onClick={this.submitRating}
                            >Submit
                            </button>   
                        </div>
                        </section>
            return submit
        }
    }

    render() {
        let ratings = 
                <section className="rating">
                    <span className="five-star" onClick={this.fiveStars} value={5}>☆</span>
                    <span className="four-star" onClick={this.fourStars} value={4}>☆</span>
                    <span className="three-star" onClick={this.threeStars} value={3}>☆</span>
                    <span className="two-star" onClick={this.twoStars} value={2}>☆</span>
                    <span className="one-star" onClick={this.oneStars} value={1}>☆</span>
                </section>
        return (
            <section className="rating-add">
                {ratings}
                {this.reRender()}
            </section>
        );
    }
}