import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Finanse from './Finanse/Finanse';

import Zakupy from './Zakupy/Zakupy';
import Paragony from './Paragony/Paragony';
import Tralalala from './Tralalala/Tralalala';
import BrygadaSiema from './BrygadaSiema/BrygadaSiema';

import NotFound from '../NotFound';


const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Finanse/Statystyki" />} />
      <Route path="/Finanse/*" element={<Finanse />} />
      <Route path="/Zakupy/*" element={<Zakupy />} />
      <Route path="/Paragony/*" element={<Paragony />} />
      <Route path="/Tralalala/*" element={<Tralalala />} />
      <Route path="/BrygadaSiema/*" element={<BrygadaSiema />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Pages;
