import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <div className="bg--img">
        <div className="cont">
          <div className="cont__head mar">
            <h1>TODO</h1>
            <ThemeToggle />
          </div>
          <div className="cont__input">
            <input type="text" placeholder="Create a new todo..." />
          </div>
          <div className="cont__list">
            <ul>
              <li>
                <button className="check">✔</button>
                <p>Hello1</p>
                <button className="del">❌</button>
              </li>
              <li>
                <button className="check">✔</button>
                <p>Hello2</p>
                <button className="del">❌</button>
              </li>
              <li>
                <button className="check">✔</button>
                <p>Hello3</p>
                <button className="del">❌</button>
              </li>
              <li>
                <button className="check">✔</button>
                <p>Hello4</p>
                <button className="del">❌</button>
              </li>
              <li>
                <button className="check">✔</button>
                <p>Hello5</p>
                <button className="del">❌</button>
              </li>
            </ul>
          </div>
          <div className="cont__fillter">
            <div className="cont__fillter--side">
              <p>5 item(s) left</p>
              <p>Clear Completed</p>
            </div>
            <div className="cont__fillter--center">
              <p>All</p>
              <p>Active</p>
              <p>Complete</p>
            </div>
          </div>
          <div className="cont__foo">
            <p>Drag and drop to reorder list</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
