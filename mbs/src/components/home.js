import React from 'react';
import SearchBar from './searchbar';


import { Link } from 'react-router-dom'; 
import './home.css';
function Home() {
    const handleSearch = (searchTerm) => {
        console.log('Search term:', searchTerm);
  };
    const homeStyle = {
        textAlign: 'center', 
        color: 'White',     
      };
  return (
    <div className="home" style={homeStyle}>
      <header>
        <h1>Welcome to Movie Booking System</h1>
        <p>Book your favorite movies now!</p>
   
        <div className="centered-search-bar">
        <SearchBar onSearch={handleSearch} />
        </div>
      </header>

      <main>
        <section className="featured-movies left-align">
          
          <div className="movie-card" >
            
          <h2 className="kuku">Kushi</h2>
            <img src="assets\images\store1-mits.jpg" alt="blabla"/>
            <Link to="/booking/movie-id" className="button-link">Book Now</Link>

          </div>
          
        </section>

        <section className="featured-movies left-align">
          
          <div className="movie-card">
            
            <h2 className="kuku">Kasargold (UA)</h2>
            <img src="assets\images\store1-mits.jpg" alt="blabla"/>
            <Link to="/booking/movie-id" className="button-link">Book Now</Link>

          </div>
          
        </section>
        <section className="middle left-align">
          
          <div className="movie-card">
            
            <h2 className="kuku">RDX (UA)</h2>
            <img src="assets\images\store1-mits.jpg" alt="blabla"/>
            <Link to="/booking/movie-id" className="button-link">Book Now</Link>

          </div>
          
        </section>
        <section className="middle-btm left-align">
          
          <div className="movie-card">
            
            <h2 className="kuku">Jawan (UA)</h2>
            <img src="assets\images\store1-mits.jpg"alt="blabla"/>
            <Link to="/booking/movie-id" className="button-link">Book Now</Link>

          </div>
          
        </section>

        <section className="btm-right left-align">
          
          <div className="movie-card">
            
            <h2 className="kuku">Nadhikalil Sundari Yamuna</h2>
            <img src="assets\images\store1-mits.jpg" alt="blabla"/>
            <Link to="/booking/movie-id" className="button-link">Book Now</Link>

          </div>
          
        </section>
        <section className="top-right left-align">
          
          <div className="movie-card">
            
            <h2 className="kuku">Alinta</h2>
            <img src="assets\images\store1-mits.jpg" alt="blabla"/>
            <Link to="/booking/movie-id" className="button-link">Book Now</Link>

          </div>
          
        </section>
        </main>


      
    </div>
  );
}

export default Home;
