import React, { useState, useEffect } from 'react';
import logoImg from './graphic/webSealLogo.png';

const Loading = ({ opacity }) => {
  const [currentOpacity, setCurrentOpacity] = useState(100);

  useEffect(() => {
    setCurrentOpacity(opacity / 100); 
  }, [opacity]);

  return (
    <div style={{ opacity: currentOpacity }} className="flex justify-center items-center w-screen h-screen bg-black transition z-20">
      <img
        className="rounded-full shadow-sm w-[16rem] p-1 z-10"
        src={logoImg}
        alt="Loading Logo"
      />
      <div
        className="absolute loading bg-loading rounded-full shadow-sm w-[16rem] h-[16rem] blur-sm"
      ></div>
    </div>
  );
};

export default Loading;
