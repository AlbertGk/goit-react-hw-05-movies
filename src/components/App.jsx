import React from 'react';
import { HomePage } from 'components/HomePage';
import { MovieDetailsPage } from 'components/MovieDetailsPage';
import { MoviesPage } from 'components/MoviesPage';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';
import { Route, Routes, Link } from 'react-router-dom';

export const App = () => {
  return (
    <>
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
    </>
  );
};
