// https://dev.to/murtuzaalisurti/dark-mode-toggle-animation-using-css-27il

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
    } else {
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
      <button className="btn" onClick={handleChange}>
        {theme} Switch
      </button>
    </>
  );
};

export default ThemeToggle;
