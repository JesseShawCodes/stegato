import React from 'react';
import {connect} from 'react-redux';
import './dashboardalbums.css';
import 'react-notifications/lib/notifications.css';

class Dashboardalbums extends React.Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(identification, whoAreYou) {
        fetch(`https://stegato-api.herokuapp.com/music-data/`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'mongoid': `${identification}`
            }),
            success: (
                this.props.updateDashboard()
            )
        })
    }

    render() {
        return (
            <div className="grid-item">
            <div className="flip-container" >
                <div className="flipper">
                    <div className="front">
                    <img className="card-img-top" src={this.props.imagelink} alt="album cover"/>
                    </div>
                    <div className="back">
                    <div className="card-block">
                    <div className="delete-button">
                    <button className='btn btn-danger delete-from-library'
                    onClick={() => {this.deleteItem(this.props.mongoId, this.props.user)}}>X
                    </button>
                    </div>
                        <p className="text-bold">{this.props.artist}</p>
                        <p className="text-bold">{this.props.album}</p>
                        <p className="text-bold">Rating: {this.props.rating}</p>
                        <p className="text-bold">{this.props.genre}</p>
                        <section className="buttons"> 
                        <a href={this.props.buyOnItunes} target="_blank" alt="Buy on Itunes" role="presentation"><button className="itunes-link"><i className="fa fa-apple" aria-hidden="true" title="Click to buy on Itunes" alt="Buy on Itunes" role="presentation"></i></button></a>
                        </section>
                    </div>
                    </div>                                
                </div>
            </div>
            </div>
          )
    }
};

Dashboardalbums.defaultProps = {
    artist: 'Artist',
    album: 'Album',
    genre: 'Genre',
    imagelink: "http://is2.mzstatic.com/image/thumb/Music/v4/ae/f9/97/aef9970e-7031-6f03-45d2-a12c0d81383e/source/100x100bb.jpg",
    buyOnItunes: "http://www.itunes.com"
};

export default connect()(Dashboardalbums)