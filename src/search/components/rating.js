import React from 'react';

export default function Rating(props) {

    return (
        <div className="rating">
            <span className="five-star">☆</span><span className="four-star" value='4'>☆</span><span className="three-star" value='3'>☆</span><span className="two-star" value='2'>☆</span><span className="one-star" value='1'>☆</span>
        </div>
    );
}

Rating.defaultProps = {
    rating: 1
}