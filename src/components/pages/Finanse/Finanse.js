import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Statystyki from './FinanseNavs/1-Statystyki';
import Dochody from './FinanseNavs/2-Dochody';
import Wydatki from './FinanseNavs/3-Wydatki';
import Oszczednosci from './FinanseNavs/4-Oszczednosci';
import ScenariuszeFinanse from './FinanseNavs/5-ScenariuszeFinanse';

import NotFound from '../../NotFound';

const Finanse = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/Finanse/Statystyki' replace/>} />
      <Route path="/Statystyki" element={<Statystyki />} />
      <Route path="/Dochody" element={<Dochody />} />
      <Route path="/Wydatki" element={<Wydatki />} />
      <Route path="/Oszczednosci" element={<Oszczednosci />} />
      <Route path="/Scenariusze" element={<ScenariuszeFinanse />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Finanse;
