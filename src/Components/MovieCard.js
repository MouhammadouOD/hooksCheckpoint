import React from 'react';

function MovieCard({title , description , posterUrl, rating}){

    return(
        <div className='m-4'>
            <img src={posterUrl} alt='film' width="300px" height="200px"/>
            <h6>Title: {title}</h6>
            <h6>Description : {description}</h6>
            <h6>Rating : {rating}</h6>
        </div>
    );

}

export default MovieCard;