import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Statystyki from './ZakupyNavs/1-Statystyki';
import Codzienne from './ZakupyNavs/2-Codzienne';
import Zaplanowane from './ZakupyNavs/3-Zaplanowane';
import Hobby from './ZakupyNavs/4-Hobby';
import Kocha from './ZakupyNavs/5-Kocha';

import NotFound from '../../NotFound';

const Zakupy = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Zakupy/Statystyki" replace />} />
      <Route path="Statystyki" element={<Statystyki />} />
      <Route path="Codzienne" element={<Codzienne />} />
      <Route path="Zaplanowane" element={<Zaplanowane />} />
      <Route path="Hobby" element={<Hobby />} />
      <Route path="Kocha" element={<Kocha />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Zakupy;
