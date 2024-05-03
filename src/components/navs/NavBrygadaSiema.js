import React from 'react';
import { NavLink } from 'react-router-dom';

const navBrygadaSiemaList = [
  { name: 'BrygadaSiema1', path: '/BrygadaSiema/BrygadaSiema1' },
  { name: 'BrygadaSiema2', path: '/BrygadaSiema/BrygadaSiema2' },
  { name: 'BrygadaSiema3', path: '/BrygadaSiema/BrygadaSiema3' },
  { name: 'BrygadaSiema4', path: '/BrygadaSiema/BrygadaSiema4' },
  { name: 'BrygadaSiema5', path: '/BrygadaSiema/BrygadaSiema5' },
];
const NavBrygadaSiema = () => {
  const menuBrygadaSiema = navBrygadaSiemaList.map(({ name, path }, index) => (
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
  return <ul className="flex">{menuBrygadaSiema}</ul>;
};

export default NavBrygadaSiema;
