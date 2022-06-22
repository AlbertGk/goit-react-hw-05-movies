import { useState, useEffect } from 'react';
import { finderInstance } from 'api/client';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [trending, setTrending] = useState([]);
    
    const getTrendingResponse = async () => {
      setIsLoading(true);
      // console.log(this.state.lookingValue);
      try {
        const response = await finderInstance.get(
          `trending/movie/day?api_key=3bf6ab2d930f009ec312eecba4ae9f94`
        );
          console.log(response);
          setTrending(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

      useEffect(() => {
          getTrendingResponse();
        // eslint-disable-next-line
      }, []);

    return (
      <>
        <h1>Trending Today</h1>
        <ul>
          {trending.map(trend => (
            <li className={''} key={trend.id}>
                  <Link to={`/movies/${trend.id}`}>{trend.original_title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
}

export default HomePage;