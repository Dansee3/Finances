import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const navListLeft = [
  { name: 'Finanse', path: '/Finanse/' },
  { name: 'Zakupy', path: '/Zakupy' },
  { name: 'Paragony', path: '/Paragony' },
  { name: 'Tralalala', path: '/Tralalala' },
  { name: 'Brygada siema', path: '/BrygadaSiema' },
  { name: 'Ustawienia', path: '/Ustawienia' },
];

const NavLeft = () => {
  const menuLeft = navListLeft.map(({ name, path }, index) => (
    <li
      key={index}
      className="navLeft w-full h-24 last:bottom-0 last:mt-[7rem]"
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? 'nav-border-y-hover bg-slate-700 scale-95 text-sm rounded-sm pointer-events-none'
            : 'nav-border-y hover:bg-slate-700 hover:rounded-sm transition'
        }
      >
        {name}
      </NavLink>
    </li>
  ));

  return (
    <div className="h-screen sticky top-0 text-center bg-slate-800 rounded-br-sm rounded-tl-[8rem] rounded-tr-[8rem] nav-border-y">
      <Logo navBord={true} shad={'logo'}/>
      <nav>
        <ul>{menuLeft}</ul>
      </nav>
    </div>
  );
};

export default NavLeft;