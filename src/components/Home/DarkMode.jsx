import React from 'react';
import icondia from '../../assets/img/icondia.png';
import iconnoite from '../../assets/img/iconnoite.png';

const DarkMode = () => {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  React.useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div>
      {theme === "light" ? (
        <img
          src={iconnoite}
          alt="Switch to dark mode"
          onClick={toggleTheme}
          className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] transition-all duration-300"
          title="Switch to dark mode"
        />
      ) : (
        <img
          src={icondia}
          alt="Switch to light mode"
          onClick={toggleTheme}
          className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)] transition-all duration-300"
          title="Switch to light mode"
        />
      )}
    </div>
  );
};

export default DarkMode;
