import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';



import NotFound from '../../NotFound.js';
import SignInForm from '../Forms/LoginForm.jsx';
import SignUpForm from '../Forms/SignUpForm.jsx';
import ForgotPasswordForm from '../Forms/ForgotPasswordForm.jsx';


const LoginPages = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInForm/>} />
      <Route path="/SignUp" element={<SignUpForm/>} />
      <Route path="/ForgotPassword" element={<ForgotPasswordForm/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default LoginPages;
