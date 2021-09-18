import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <div className="cont">
        <div className="cont__head">
          <h1>TODO</h1>
          <ThemeToggle />
        </div>
        <div className="cont__input"></div>
        <div className="cont__list"></div>
        <div className="cont__mark"></div>
      </div>
    </>
  );
};

export default Main;
