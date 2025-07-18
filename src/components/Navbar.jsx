import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Navbar = ({ darkMode, onDarkModeToggle }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              PLP Task Manager
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#dashboard" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </a>
            <a 
              href="#tasks" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Tasks
            </a>
            <a 
              href="#api" 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              API Data
            </a>
          </nav>

          {/* Dark Mode Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={onDarkModeToggle}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  onDarkModeToggle: PropTypes.func.isRequired,
};

export default Navbar;