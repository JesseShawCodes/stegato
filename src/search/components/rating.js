import React from 'react';
import './rating.css'

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
    }

    fiveStars() {
        this.setState({
            rating: 5
        })
        console.log(this.state.rating)
    }

    fourStars() {
        this.setState({
            rating: 4
        })
        console.log(this.state.rating)
    }

    threeStars() {
        this.setState({
            rating: 3
        })
        console.log(this.state.rating)
    }

    twoStars() {
        this.setState({
            rating: 2
        })
        console.log(this.state.rating)
    }

    oneStars() {
        this.setState({
            rating: 1
        })
        console.log(this.state.rating)
    }

    submitRating(input) {
        console.log("Submitting Rating")
        console.log(input)
    }

    reRender() {
        let submit
        var submission = {
            artist: this.props.Artist,
            album: this.props.Album,
            genre: this.props.Genre,
            rating: this.state.rating,
            artwork: this.props.Artwork,
            itunesLink: this.props.buyOnItunes
        }
        console.log(submission);
        if (this.state.rating !== undefined) {
            let submit =    
                        <div className="submit-rating">
                            <button 
                                    type="submit" 
                                    className="submit-rating-button"
                                    onClick={this.submitRating(submission)}
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
            </section>
        );
    }
}