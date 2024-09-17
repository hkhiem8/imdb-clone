import { useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard.jsx';
import { Spinner } from '@chakra-ui/spinner'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const apiKey = '1b65ed58';

  const searchMovies = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);
    setMovies(response.data.Search || []);
  };

  return (
    <div className="home-container">
      <form onSubmit={searchMovies}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
