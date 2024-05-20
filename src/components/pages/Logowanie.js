import React, { useState, useEffect } from 'react';

import Loading from './Loading';
import LoginPagesLayout from './1LoginPages/LoginPagesLayout';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const Users = () => {
    const ppls = [
      {
        id: 1,
        name: 'Kamil',
        surname: 'Kalbarczyk',
        login: 'dansee3',
        password: 'dupa',
      },
      {
        id: 2,
        name: 'Pawel',
        surname: 'Plutecki',
        login: 'Pluto',
        password: 'dupa1',
      },
    ];
  };

  return isLoading ? <LoginPagesLayout /> : <Loading />;
};

export default Login;
