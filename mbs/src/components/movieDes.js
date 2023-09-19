
import React, { useState, useEffect } from 'react';
import './movieDes.css';

const MovieDes = ({ movieId }) => {
  const [movie, setMovie] = useState({
    name: 'RDX',
    rating: 8.5,
    description: '',
    language: 'Malayalam',
    imageUrl: '',
  });

  useEffect(() => {
    // Replace 'your_backend_api_url' with your actual API endpoint that accepts a movie_id parameter
    fetch(`your_backend_api_url?movie_id=${movieId}`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data); // Update movie state with data from the backend
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  }, [movieId]); // Trigger the effect whenever movieId changes
  const aboutStyle={
    color: 'White',
  };
  return (
    <div className="c1">
      <div className="movie-details">
        <h2>{movie.name}</h2>
        <img src={movie.imageUrl} alt={movie.name} className="movie-poster" />
        <div className='content'>
          <p>Rating: {movie.rating}/10</p>
          <p>Language: {movie.language}</p>
          <button className='b1'>Book tickets</button>
        </div>
      </div>
      <div className='about' style={aboutStyle}>
      <h3>About The Movie</h3>
      <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDes;

