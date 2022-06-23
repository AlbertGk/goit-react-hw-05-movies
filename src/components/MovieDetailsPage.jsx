import { useState, useEffect } from 'react';
import { finderInstance } from 'api/client';
import { useParams, Outlet, Link, useNavigate } from 'react-router-dom';
import { Loader } from 'components/Loader';
import styles from '../styles/MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [movieYear, setMovieYear] = useState('');
  const { movieId } = useParams();

  let navigate = useNavigate();

  const getMovieDetailsResponse = async () => {
    setIsLoading(true);
    // console.log(this.state.lookingValue);
    try {
      const response = await finderInstance.get(
        `movie/${movieId}?api_key=3bf6ab2d930f009ec312eecba4ae9f94&language=en-US`
      );
      console.log(response);
      setMovieDetails(response.data);
      setMovieGenres(response.data.genres);
      setMovieYear(() => {
        new Date(response.data.release_date).getFullYear();
      });
      console.log(movieYear);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovieDetailsResponse();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={styles.MovieDetailsPage_btn}
      >
        Go back
      </button>
      {isLoading && <Loader type="spokes" color="#3f72b5" />}
      <img
        src={`
            https://image.tmdb.org/t/p/w300${movieDetails.poster_path}
        `}
        alt={movieDetails.original_title}
        className={styles.MovieDetailsPage_poster}
      ></img>
      <div>
        <h1>
          {movieDetails.original_title}({movieYear})
        </h1>
        <p>User score: {movieDetails.vote_average * 10}%</p>
        <h2>Overview</h2>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        {movieGenres.map(genre => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </div>
      <hr></hr>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li key="cast" className={styles.Cast_list}>
            <Link to={`/movies/${movieId}/cast`} className={styles.Cast_list}>
              Cast
            </Link>
          </li>
          <li key="reviews" className={styles.Cast_list}>
            <Link
              to={`/movies/${movieId}/reviews`}
              className={styles.Cast_list}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;