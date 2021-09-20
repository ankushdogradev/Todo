// Reference: https://gracious-joliot-9a183c.netlify.app/

import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { BsCheck, BsTrash } from "react-icons/bs";
import "./Main.scss";

const Main = () => {
  return (
    <>
      <div className="todo">
        <div className="bg--img">
          <div className="head mar">
            <h1>TODO</h1>
            <ThemeToggle />
          </div>
          <div className="cont mar">
            <div className="cont__input">
              <div class="cont__input--circle"></div>
              <input type="text" placeholder="Create a new todo..." />
            </div>
            <div className="cont__list">
              <ul>
                <li>
                  <div className="check">
                    <BsCheck />
                  </div>
                  <p>Hello1</p>
                  <div className="del">
                    <BsTrash />
                  </div>
                </li>
                <li>
                  <div className="check">
                    <BsCheck />
                  </div>
                  <p>Hello2</p>
                  <div className="del">
                    <BsTrash />
                  </div>
                </li>
                <li>
                  <div className="check">
                    <BsCheck />
                  </div>
                  <p>Hello3</p>
                  <div className="del">
                    <BsTrash />
                  </div>
                </li>
                <li>
                  <div className="check">
                    <BsCheck />
                  </div>
                  <p>Hello4</p>
                  <div className="del">
                    <BsTrash />
                  </div>
                </li>
                <li>
                  <div className="check">
                    <BsCheck />
                  </div>
                  <p>Hello5</p>
                  <div className="del">
                    <BsTrash />
                  </div>
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
      </div>
    </>
  );
};

export default Main;
