import React from 'react';
import './movieDes.css';

const movieDes = () => {
  // Replace these with your movie details
  const movie = {
    name: 'RDX',
    rating: 8.5/10,
    description: 'Robert Dony Xavier is a revenge drama dealing in more than two timelines.',
    language: 'English',
  };
  
  return (
    <div className="c1">
      <div className="movie-details">
        <h2>{movie.name}</h2>
        <p>Rating: {movie.rating}/10</p>
        <p>Description: {movie.description}</p>
        <p>Language: {movie.language}</p>
        <button className='b1'>Book tickets</button>
      </div>
      <h3>About The Movie</h3>
      {movie.description}    
    </div>
  );
};

export default movieDes;

