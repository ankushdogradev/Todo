import React, { useState, useEffect } from "react";
import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const [themeState, setThemeState] = useState(false);
  const [theme, setTheme] = useState("");

  const handleChange = () => {
    setThemeState(!themeState);
    if (themeState) {
      localStorage.setItem("Theme", "light");
      document.documentElement.classList.add("theme-light");
      document.documentElement.classList.remove("theme-dark");
      setTheme("Light");
    } else if (!themeState) {
      localStorage.setItem("Theme", "dark");
      document.documentElement.classList.add("theme-dark");
      document.documentElement.classList.remove("theme-light");
      setTheme("Dark");
    }
  };

  useEffect(() => {
    const getTheme = localStorage.getItem("Theme");
    if (getTheme === "dark") {
      return document.documentElement.classList.add("theme-dark");
    } else if (getTheme === "light") {
      return document.documentElement.classList.add("theme-light");
    }
  });
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
