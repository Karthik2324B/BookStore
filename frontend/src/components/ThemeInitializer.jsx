import React, { useEffect } from 'react';

function ThemeInitializer() {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []); // run once on mount

  return null; // no UI
}

export default ThemeInitializer;
