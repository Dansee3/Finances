import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import BrygadaSiema1 from './BrygadaNavs/BrygadaSiema1';
import BrygadaSiema2 from './BrygadaNavs/BrygadaSiema2';
import BrygadaSiema3 from './BrygadaNavs/BrygadaSiema3';
import BrygadaSiema4 from './BrygadaNavs/BrygadaSiema4';
import BrygadaSiema5 from './BrygadaNavs/BrygadaSiema5';

import NotFound from '../../NotFound';





const BrygadaSiema = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/BrygadaSiema/BrygadaSiema1' replace/>} />
      <Route path='BrygadaSiema1' element={<BrygadaSiema1/>} />
      <Route path='BrygadaSiema2' element={<BrygadaSiema2/>} />
      <Route path='BrygadaSiema3' element={<BrygadaSiema3/>} />
      <Route path='BrygadaSiema4' element={<BrygadaSiema4/>} />
      <Route path='BrygadaSiema5' element={<BrygadaSiema5/>} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
};

export default BrygadaSiema;
