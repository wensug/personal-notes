import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className='nav'>
        <p className='logo' to='/'>
          Wendy Gonzalez
        </p>
        <ul className='menu'>
          <li>
            <NavLink to='/'>Notes</NavLink>
          </li>
          <li>
            <NavLink to='/create'>Create Note</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}