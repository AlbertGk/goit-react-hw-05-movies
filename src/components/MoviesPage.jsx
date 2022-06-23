import { useState, useEffect } from 'react';
import { finderInstance } from 'api/client';
import { Link } from 'react-router-dom';
import { saveInLocalStorage, loadFromLocalStorage } from 'api/localStorage';
import { Loader } from 'components/Loader';
import styles from '../styles/MoviesPage.module.css';

const MoviesPage = () => {
  const [lookingValue, setLookingValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const handleChange = event => {
    event.preventDefault();
    setLookingValue(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await finderInstance.get(
        `search/movie?api_key=3bf6ab2d930f009ec312eecba4ae9f94&language=en-US&query=${lookingValue}&page=1&include_adult=false`
      );
      console.log(response);
      setSearchResults(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    saveInLocalStorage('searchResults', searchResults);
  }, [searchResults]);

  useEffect(() => {
    const storageArray = loadFromLocalStorage('searchResults');
    if (storageArray) {
      setSearchResults(searchResults);
      console.log('aaa');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <header className={''}>
        <form className={''} onSubmit={handleSubmit}>
          <button type="submit" className={styles.MoviesPage_btn}>
            <span className={''}>Search</span>
          </button>

          <input
            value={lookingValue}
            onChange={handleChange}
            className={styles.MoviesPage_search}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </form>
      </header>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map(searchResult => (
            <li className={styles.MoviesPage_list} key={searchResult.id}>
              <Link
                to={`/movies/${searchResult.id}`}
                className={styles.MoviesPage_list}
              >
                {searchResult.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <Loader type="spokes" color="#3f72b5" />}
    </>
  );
};

export default MoviesPage;
