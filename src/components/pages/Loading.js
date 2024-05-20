import React from 'react';
import logoImg from '../graphic/webSealLogo.png';

const Loading = () => {
  return (
    <div
      className="flex justify-center items-center w-screen h-screen bg-black transition duration-500 z-20"
    >
      <img
        className="rounded-full shadow-sm w-[16rem] p-1 z-10"
        src={logoImg}
        alt="Loading Logo"
      />
      <div className="absolute loading bg-loading rounded-full shadow-sm w-[16rem] h-[16rem] blur-sm"></div>
    </div>
  );
};

export default Loading;
