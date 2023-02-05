import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  const setClass = ({ isActive }) =>
    isActive ? 'menu__item menu__item-active' : 'menu__item';

  return (
    <nav className='menu'>
      <NavLink className={setClass} to='/'>
        Главная
      </NavLink>
      <NavLink className={setClass} to='/drift'>
        Дрифт-такси
      </NavLink>
      <NavLink className={setClass} to='/timeattack'>
        Time Attack
      </NavLink>
      <NavLink className={setClass} to='/forza'>
        Forza Karting
      </NavLink>
    </nav>
  );
}

export default Menu;
