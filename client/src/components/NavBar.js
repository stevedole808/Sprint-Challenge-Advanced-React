import React from 'react';
import useDarkMode from './useDarkMode';
import "../App.css"
const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav>
      <h1 data-testid="rawr">This The Crew!</h1>
      <div className="dark-mode__toggle">
      <button data-testid="darkMode" onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}>LETS GO BLACK</button>
      </div>
    </nav>
  );
};

export default Navbar;