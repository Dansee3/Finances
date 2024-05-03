import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Obsluga from './ParagonyNavs/1.Obsluga';
import Aplikacja from './ParagonyNavs/2.Aplikacja';
import Statystyki from './ParagonyNavs/3.Statystyki';
import Paragony4 from './ParagonyNavs/4.Paragony';
import Paragony5 from './ParagonyNavs/5.Paragony';

import NotFound from '../../NotFound';

const Paragony = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/Paragony/Obsluga' replace/>} />
      <Route path="/Obsluga" element={<Obsluga />} />
      <Route path="/Aplikacja" element={<Aplikacja />} />
      <Route path="/Statystyki" element={<Statystyki />} />
      <Route path="/Paragony4" element={<Paragony4 />} />
      <Route path="/Paragony5" element={<Paragony5 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Paragony;
