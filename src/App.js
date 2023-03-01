import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import {
//   ERROR_ROUTE,
//   GENRES_ROUTE,
//   HOME_ROUTE,
//   SONGS_ROUTE,
// } from './constants/routes';
// import {
//   ErrorPage,
//   GenresPage,
//   HomePage,
//   NotFoundPage,
//   SongsPage,
// } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/songs" element={<Songs />} />
        <Route path="/genre" element={<SongsByGenre />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
