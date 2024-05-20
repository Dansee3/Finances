import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="scale-[.80] min-w-40 mt-[-20px] sm:mt-0 sm:scale-100 transition">
      <div className="mb-4 ">
        <label
          className="block mt-[10%] text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="mb-6 min-w-40 sm:scale-100 transition">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <button
          className="bg-wax hover:bg-seaBlue text-white font-bold py-2 shadow-md rounded focus:outline-none focus:shadow-outline min-w-40  sm:scale-100 transition"
          type="submit"
        >
          Sign In
        </button>
        <NavLink
          to="/ForgotPassword"
          className="inline-block px-10 align-baseline font-bold text-sm text-blue-300 hover:text-[#400514]"
        >
          Forgot Password
        </NavLink>
      </div>
      <div className="inline-block mt-10">
        <NavLink
          to="/SignUp"
          className="font-bold text-sm text-blue-300 hover:text-[#400514]"
        >
          Dont you have acc ?<br></br>Sing Up Here
        </NavLink>
      </div>
    </div>
  );
};

export default LoginForm;
