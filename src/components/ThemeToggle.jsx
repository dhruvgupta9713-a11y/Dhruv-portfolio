import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      id="theme-toggle-btn"
    >
      <div className="toggle-track">
        <Sun className={`toggle-icon sun ${theme === 'light' ? 'active' : ''}`} size={16} />
        <Moon className={`toggle-icon moon ${theme === 'dark' ? 'active' : ''}`} size={16} />
        <div className={`toggle-thumb ${theme === 'light' ? 'light' : ''}`} />
      </div>
    </button>
  );
};

export default ThemeToggle;
