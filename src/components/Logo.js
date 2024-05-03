import React from 'react';

import logoImg from './graphic/webSealLogo.png';

const Logo = () => {
  return (
    <>
      <div className="relative flex justify-center items-center w-full nav-border-y backdrop-blur-xl">
        <img
          className="rounded-full shadow-sm w-[13rem] p-1 z-10"
          src={logoImg}
          alt="WebSeal Logo"
        />
        <div className="absolute rounded-full shadow-sm w-[95%] h-[95%] lg:w-[13rem] lg:h-[13rem] p-2 bg-black blur-md "></div>
      </div>
    </>
  );
};

export default Logo;
