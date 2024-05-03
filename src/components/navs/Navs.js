import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavFinanse from './NavFinanse';
import NavZakupy from './NavZakupy';
import NavParagony from './NavParagony';
import NavTralalala from './NavTralalala';
import NavBrygadaSiema from './NavBrygadaSiema';


const Navs = () => {
  return (
    <Routes>
      <Route path="/Finanse/*" element={<NavFinanse />} />
      <Route path="/Zakupy/*" element={<NavZakupy/>} />
      <Route path="/Paragony/*" element={<NavParagony/>} />
      <Route path="/Tralalala/*" element={<NavTralalala/>} />
      <Route path="/BrygadaSiema/*" element={<NavBrygadaSiema/>} />

    </Routes>
  );
};

export default Navs;
