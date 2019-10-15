import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <>
    <nav className="navbar">
      <h1>Crypto Tracker</h1>    
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
    <div className='links'>
        <NavLink className='link' to='/'>Home</NavLink>  
        <NavLink className='link' to='/top10'>Top 10 Coins</NavLink>  
        <NavLink className='link' to='/coins'>Coins</NavLink>  
        <NavLink className='link' to='/about'>About</NavLink>  
      </div>
  </>
  );
};

export default Navbar;
