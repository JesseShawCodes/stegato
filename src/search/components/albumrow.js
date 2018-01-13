import React from 'react';
import './albumrow.css';


export default function AlbumRow(props) {
    return (
        <div className="grid-item">
        <div className="flip-container" onTouchStart="this.classList.toggle('hover');">
            <div className="flipper">
                <div className="front">
                <img className="card-img-top" src={props.imagelink} alt="album cover"/>
                </div>
                <div className="back">
                <div className="card-block">
                    <h5 className="text-bold">{props.artist}</h5>
                    <h5 className="text-bold">{props.album}</h5>
                    <p className="text-bold">{props.genre}</p>
                    <section className="rating-add">
                    <div className="rating">
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    </section>
                    <section className="buttons">   
                    <i className="fa fa-plus" aria-hidden="true" title="Click to add to listen list"></i>
                    <a href={props.buyOnItunes} target="_blank" alt="Buy on Itunes" role="presentation"><button className="itunes-link"><i className="fa fa-apple" aria-hidden="true" title="Click to buy on Itunes" alt="Buy on Itunes" role="presentation"></i></button></a>
                    </section>
                </div>
                </div>                                
            </div>
        </div>
        </div>
      );
};

AlbumRow.defaultProps = {
    artist: 'Artist',
    album: 'Album',
    genre: 'Genre',
    imagelink: "http://is2.mzstatic.com/image/thumb/Music/v4/ae/f9/97/aef9970e-7031-6f03-45d2-a12c0d81383e/source/100x100bb.jpg",
    buyOnItunes: "http://www.itunes.com"
};