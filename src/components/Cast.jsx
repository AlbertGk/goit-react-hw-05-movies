import { useState, useEffect } from 'react';
import { finderInstance } from 'api/client';
import { useParams } from 'react-router-dom';

export const Cast = () => {
    
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [castDetails, setCastDetails] = useState([]);
  const { movieId } = useParams();

  const getCastDetailsResponse = async () => {
    setIsLoading(true);
    try {
      const response = await finderInstance.get(
        `movie/${movieId}/credits?api_key=3bf6ab2d930f009ec312eecba4ae9f94&language=en-US`
      );
      console.log(response);
      setCastDetails(response.data.cast);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCastDetailsResponse();
    // eslint-disable-next-line
  }, []);


  return (
    <ul>
      {castDetails.map(castDetail => (
        <li className={''} key={castDetail.credit_id}>
          <img
            src={`https://image.tmdb.org/t/p/w200${castDetail.profile_path}`} alt={castDetail.name}/>
          <p>Name: {castDetail.name}</p>
          <p>Character: {castDetail.character}</p>
        </li>
      ))}
    </ul>
  );
};
