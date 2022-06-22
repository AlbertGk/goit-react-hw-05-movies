import { React, lazy, Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
// import { HomePage } from 'components/HomePage';
// import { MovieDetailsPage } from 'components/MovieDetailsPage';
// import { MoviesPage } from 'components/MoviesPage';
// import { Cast } from 'components/Cast';
// import { Reviews } from 'components/Reviews';

const HomePage = lazy(() => import('components/HomePage'));
const MovieDetailsPage = lazy(() => import('components/MovieDetailsPage'));
const MoviesPage = lazy(() => import('components/MoviesPage'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
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
