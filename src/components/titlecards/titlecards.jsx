import React, { useEffect, useRef, useState } from 'react';
import './titlecards.css';
import { Link } from 'react-router-dom';

const Titlecards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTI4YjUzMjZhYThhMDE5MmIwYTM2ZjJlMTUwYzY0MCIsInN1YiI6IjY2M2E3OGNmNzM2MDYxZTg0YThhYTQyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2LDBRFsMjDU8cAgGVppmVaf6J8ADJC6VSJiZSohZ7Go'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(data => setApiData(data.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel); 
  }, []);

  return (
    <div className='title-cards'>

      <h2>{title ? title : "Popular on Moringa Flix!"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((movie, index) => (
          <Link to = {`/player/${movie.id}`}className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt='' />
            <p>{movie.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Titlecards;
