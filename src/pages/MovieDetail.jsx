import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from '@chakra-ui/spinner'

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = '1b65ed58';

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);

  if (movie && movie.Poster) {
    return (
      <div className="movie-detail">
        <img src={movie.Poster} alt={movie.Title} />
        <h1>{movie.Title}</h1>
        <p>{movie.Plot}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Cast:</strong> {movie.Actors}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Year:</strong> {movie.Year}</p>
      </div>
    );
  } return <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
    />
};

export default MovieDetail;