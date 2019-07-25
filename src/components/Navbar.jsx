import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
const Navbar = () => {
    const [darkMode, setDarkmode] = useDarkMode(false, 'Dark Mode ON')
    const toggleMode = e => {
        e.preventDefault();
        setDarkmode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1>Crypto Tracker</h1>
            <div className="darkModeToggle">
                <div onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'} />
            </div>
        </nav>
    );
};

export default Navbar;