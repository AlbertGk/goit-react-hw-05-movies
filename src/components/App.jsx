import { React, lazy, Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Loader } from 'components/Loader';
import styles from '../styles/Nav.module.css';


const HomePage = lazy(() => import('components/HomePage'));
const MovieDetailsPage = lazy(() => import('components/MovieDetailsPage'));
const MoviesPage = lazy(() => import('components/MoviesPage'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader type="spokes" color="#3f72b5" />}>
        <nav className={styles.Nav}>
          <Link to="/" className={styles.Nav_text}>
            Home
          </Link>
          <Link to="/movies" className={styles.Nav_text}>
            Movies
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
