import React from 'react';

import logoImg from './graphic/webSealLogo.png';

const Logo = ({ navBord, shad }) => {
  return (
    <>
      <div
        className={`relative flex justify-center items-center w-full 
      ${navBord ? 'nav-border-y' : ''}  backdrop-blur-xl`}
      >
        <img
          className="rounded-full shadow-sm min-w-[9rem] w-[13rem] p-1 z-10"
          src={logoImg}
          alt="WebSeal Logo"
        />
        {shad === 'logo' ? (
          <div className="absolute rounded-full shadow-sm w-[80%] h-[95%] lg:w-[13rem] lg:h-[13rem] p-2 bg-black blur-md "></div>
        ) : (
          <div className="absolute top-4 rounded-full shadow-sm w-[40vw] max-w-[13rem] h-[95%] sm:w-[12.5rem] lg:w-[13rem] p-2 bg-black blur-md "></div>
        )}
      </div>
    </>
  );
};

export default Logo;
