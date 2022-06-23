import { useState, useEffect } from 'react';
import { finderInstance } from 'api/client';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line
import { Loader } from 'components/Loader';
import styles from '../styles/Cast.module.css';

 const Cast = () => {
   // eslint-disable-next-line
   const [isLoading, setIsLoading] = useState(false);
   // eslint-disable-next-line
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
     <>
       <ul className={styles.Cast_container}>
         {castDetails.map(castDetail => (
           <li className={styles.Cast_elem} key={castDetail.credit_id}>
             <img
               src={`https://image.tmdb.org/t/p/w200${castDetail.profile_path}`}
               alt={castDetail.name}
             />
             <div>
               <p>Name: {castDetail.name}</p>
               <p>Character: {castDetail.character}</p>
             </div>
           </li>
         ))}
       </ul>
       {/* {isLoading && <Loader type="spokes" color="#3f72b5" />} */}
     </>
   );
 };

export default Cast;