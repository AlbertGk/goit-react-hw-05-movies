import { useState, useEffect } from 'react';
import { finderInstance } from 'api/client';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviewsDetails, setReviewsDetails] = useState([]);
  const { movieId } = useParams();

  const getReviewsDetailsResponse = async () => {
    setIsLoading(true);
    try {
      const response = await finderInstance.get(
        `movie/${movieId}/reviews?api_key=3bf6ab2d930f009ec312eecba4ae9f94&language=en-US`
      );
      console.log(response);
      setReviewsDetails(response.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getReviewsDetailsResponse();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {reviewsDetails.length > 0 ?
        (<ul>
          {reviewsDetails.map(reviewsDetail => (
            <li className={''} key={reviewsDetail.id}>
              <h4>Author: {reviewsDetail.author}</h4>
              <p>{reviewsDetail.content}</p>
            </li>
          ))}
        </ul>) : (<p>Nothing to show</p>)}
 
  {/* {isLoading && <Loader type="spokes" color="#3f72b5" />} */}
    </>
 );
};


export default Reviews;