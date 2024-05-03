import React from 'react';
import { Routes, Route, Navigate } from 'react-router';

import Tralalala1 from './TralalalaNavs/1-Tralalala';
import Tralalala2 from './TralalalaNavs/2-Tralalala';
import Tralalala3 from './TralalalaNavs/3-Tralalala';
import Tralalala4 from './TralalalaNavs/4-Tralalala';
import Tralalala5 from './TralalalaNavs/5-Tralalala';

import NotFound from '../../NotFound';

const Tralalala = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/Tralalala/Tralalala1" replace />}
      />
      <Route path="/Tralalala1" element={<Tralalala1 />} />
      <Route path="/Tralalala2" element={<Tralalala2 />} />
      <Route path="/Tralalala3" element={<Tralalala3 />} />
      <Route path="/Tralalala4" element={<Tralalala4 />} />
      <Route path="/Tralalala5" element={<Tralalala5 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Tralalala;
