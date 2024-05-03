import React from 'react';
import Loading from './Loading';

const Login = () => {
  return (
    <div className="flex justify-center items-centerw-full h-full bg-slate-500">
      <div className="absolute top-32 min-h-[80%] w-[65%] bg-slate-600 border border-seaBlue rounded-md"></div>
      <div className="relative  bg-black h-[90%] w-[90%] rounded-md backdrop-blur-sm"></div>
      <div>
        <Loading opacity={100} />
      </div>
    </div>
  );
};

export default Login;
