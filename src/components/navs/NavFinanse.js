import React from 'react';
import { NavLink } from 'react-router-dom';

const navFinanseList = [
  { name: 'Statystyki', path: '/Finanse/Statystyki' },
  { name: 'Dochody', path: '/Finanse/Dochody' },
  { name: 'Wydatki', path: '/Finanse/Wydatki' },
  { name: 'Oszczednosci', path: '/Finanse/Oszczednosci' },
  { name: 'scenariusze', path: '/Finanse/Scenariusze' },
];
const NavFinanse = () => {
  const menuFinanse = navFinanseList.map(({ name, path }, index) => (
    <li
      key={index}
      className="flex justify-center items-center w-full h-[4rem] bg-slate-800 rounded-br-sm "
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? 'nav-border-y-hover bg-slate-700 scale-95 text-sm rounded-sm '
            : 'nav-border-y  hover:bg-slate-700 hover:rounded-sm transition'
        }
      >
        {name}
      </NavLink>
    </li>
  ));
  return <ul className="flex">{menuFinanse}</ul>;
};
export default NavFinanse;
