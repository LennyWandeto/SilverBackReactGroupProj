import React from 'react';
import { Link } from 'react-router-dom';
// import './Results.css'

function Results({ movies }) {
    console.log(movies);
    const isMovieAvailable = movies.backdrop_path !== null;

    return (
        <div className='title-cards'>
            <div className="card-list">
                <Link
                    to={isMovieAvailable ? `/player/${movies.id}` : '#'}
                    className={`card ${!isMovieAvailable ? 'disabled-link' : ''}`}
                    key={movies.id}
                >
                    {isMovieAvailable && (
                        <img src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`} alt='' />
                    )}
                    {isMovieAvailable ? (
                        <p>{movies.original_title}</p>
                    ) : (
                        <div className='error-text' style={{textDecoration:"line-through", color: "white"}}>
                            Ooops, movie is not available
                        </div>
                    )}
                </Link>
            </div>
        </div>
    );
}

export default Results;
