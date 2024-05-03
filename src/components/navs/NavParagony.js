import React from 'react';
import { NavLink } from 'react-router-dom';

const navRachonkowoscList = [
  { name: 'Obsluga', path: '/Paragony/Obsluga' },
  { name: 'Aplikacja', path: '/Paragony/Aplikacja' },
  { name: 'Statystyki', path: '/Paragony/Statystyki' },
  { name: 'Paragony4', path: '/Paragony/Paragony4' },
  { name: 'Paragony5', path: '/Paragony/Paragony5' },
];
const NavParagony = () => {
  const menuParagony = navRachonkowoscList.map(({ name, path }, index) => (
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
  return <ul className="flex">{menuParagony}</ul>;
};

export default NavParagony;
