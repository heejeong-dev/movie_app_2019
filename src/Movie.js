import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({id, year, title, summary, poster, genres}) {
    return <div className = 'movie'>
        <img src = {poster} alt = {title} title = {title}></img>
        <div className = 'movie_data'>
            <h3 className = 'movie_title'>{title}</h3>
            <h5 className = 'movie_year'>{year}</h5>
            {genres.map((genre, index) => 
                <li key = {index} className = 'movie_genres'>{genre}</li>)}
            <p className = 'movie_summary'>{summary.slice(0, 140)}...</p>
            
        </div>
    </div>
}

Movie.PropTypess = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,    
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;