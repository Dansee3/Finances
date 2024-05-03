import React from 'react';
import { NavLink } from 'react-router-dom';

const navRachonkowoscList = [
  { name: 'Tralalala1', path: '/Tralalala/Tralalala1' },
  { name: 'Tralalala2', path: '/Tralalala/Tralalala2' },
  { name: 'Tralalala3', path: '/Tralalala/Tralalala3' },
  { name: 'Tralalala4', path: '/Tralalala/Tralalala4' },
  { name: 'Tralalala5', path: '/Tralalala/Tralalala5' },
];
const NavTralalala = () => {
  const menuTralalala = navRachonkowoscList.map(({ name, path }, index) => (
    <li
      key={index}
      className="flex justify-center items-center w-full h-[4rem] bg-slate-800 rounded-br-sm "
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? 'nav-border-y-hover bg-slate-700 scale-95 text-sm rounded-sm'
            : 'nav-border-y  hover:bg-slate-700 hover:rounded-sm transition'
        }
      >
        {name}
      </NavLink>
    </li>
  ));
  return <ul className="flex">{menuTralalala}</ul>;
};

export default NavTralalala;
