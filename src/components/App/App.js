import React from "react";
import Main from "../Main/Main";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./App.scss";

const App = () => {
  return (
    <>
      <Main />
      <h2 className="theme-dark">Hakka</h2>
      <ThemeToggle />
    </>
  );
};

export default App;
