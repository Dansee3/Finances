import React from 'react';
import { NavLink } from 'react-router-dom';

const navZakupyList = [
  { name: 'Statystyki', path: '/Zakupy/Statystyki' },
  { name: 'Codzienne', path: '/Zakupy/Codzienne' },
  { name: 'Zaplanowane', path: '/Zakupy/Zaplanowane' },
  { name: 'Hobby', path: '/Zakupy/Hobby' },
  { name: 'Kocha', path: '/Zakupy/Kocha' },
];
const NavZakupy = () => {
  const menuZakupy = navZakupyList.map(({ name, path }, index) => (
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
  return <ul className="flex">{menuZakupy}</ul>;
};

export default NavZakupy;
