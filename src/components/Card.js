import React from 'react';

const Card = (props) => {
    return (
        <div className='quote-container'>
            <p className='quote'>{props.quote ? `"${props.quote}"` : null }</p>
            <p className='kanye'>{props.quote ? "-Kanye West" : null }</p>
        </div>
    )
}

export default Card
