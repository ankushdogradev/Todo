import React, { useState, useEffect } from "react";
import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    setThemeState(!themeState);

    if (themeState) {
      document.documentElement.classList.add("theme-light");
      document.documentElement.classList.remove("theme-dark");

      localStorage.setItem("Theme", "light");
    } else if (!themeState) {
      document.documentElement.classList.add("theme-dark");
      document.documentElement.classList.remove("theme-light");

      localStorage.setItem("Theme", "dark");
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") {
      document.documentElement.classList.remove("theme-light");
      document.documentElement.classList.add("theme-dark");
      setThemeState(true);
    } else if (getTheme === "light") {
      document.documentElement.classList.remove("theme-dark");
      document.documentElement.classList.add("theme-light");
      setThemeState(false);
    }
  }, []);

  return (
    <>
      <div className="toggle" onClick={handleChange}>
        <img
          className={
            themeState ? `toggle__sun--anim  toggle__sun` : `toggle__sun`
          }
          src="/img/icon-sun.svg"
          alt="Dark"
        />
        <img
          className={
            themeState ? `toggle__moon--anim toggle__moon` : `toggle__moon`
          }
          src="/img/icon-moon.svg"
          alt="Light"
        />
      </div>
    </>
  );
};

export default ThemeToggle;
