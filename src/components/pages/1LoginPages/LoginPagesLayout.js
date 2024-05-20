import React from 'react';
import Logo from '../../Logo';
import LoginPages from './LoginPages';

import SocialMediaBar from '../../SocialMediaBar.jsx';

const LoginPagesLayout = () => {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-slate-900 z-10 overflow-hidden">
      <form className="flex flex-col items-center mt-10 h-[100%] w-[80%] sm:w-[55%]  px-20  rounded-md backdrop-blur-sm z-10">
        <Logo navBord={false} />
        <LoginPages />
        <SocialMediaBar />
      </form>
      <div className="absolute inset-x-50 inset-y-[20vw] sm:inset-y-[8rem] sm:min-w-[50%] min-h-[80%] min-w-[60%]  max-w-[34rem] bg-slate-500 border border-seaBlue rounded-md -z-10 transition"></div>
    </div>
  );
};

export default LoginPagesLayout;
