/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import CardDetails from './pages/CardDetails';

import { HOME_ROUTE, ERROR_ROUTE, CARD_DETAILS } from './constants/routesPaths';
// import ERROR_ROUTE from './constants/routesPaths';

// import SONG_DETAILS_ROUTE from './constants/routesPaths';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={CARD_DETAILS} element={<CardDetails />} />
        <Route path={ERROR_ROUTE} element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
