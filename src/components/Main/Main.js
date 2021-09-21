// Reference: https://gracious-joliot-9a183c.netlify.app/

import React, { useState, useEffect } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { BsCheck, BsTrash } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import uniqid from "uniqid";
import "./Main.scss";

const Main = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([
    {
      id: uniqid(),
      text: "Jog around the park 3x",
      completed: false,
    },
    {
      id: uniqid(),
      text: "10 minutes meditation",
      completed: false,
    },
    {
      id: uniqid(),
      text: "Read for 1 hour",
      completed: false,
    },
    {
      id: uniqid(),
      text: "Pick up groceries",
      completed: false,
    },
    {
      id: uniqid(),
      text: "Complete Todo App on Frontend Mentor",
      completed: false,
    },
  ]);

  const [compCount, setCompCount] = useState(0);

  useEffect(() => {
    let comp = items.filter((item) => {
      return item.completed;
    });
    setCompCount(comp.length);
  }, [items]);

  const checkItem = (id) => {
    console.log("Check handler called");
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const addItem = () => {
    if (!inputText) {
      console.log("Cannot enter Empty String");
    } else {
      setItems([...items, { id: uniqid(), text: inputText, completed: false }]);
      console.log(items);
      setInputText("");
    }
  };

  const deleteItem = (i) => {
    const updatedItems = items.filter((item) => {
      return item.id !== i;
    });
    setItems(updatedItems);
  };

  const clearCompleted = () => {
    const updatedItems = items.filter((item) => {
      return item.completed !== true;
    });
    setItems(updatedItems);
  };

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
              <div className="cont__input--circle"></div>
              <input
                type="text"
                placeholder="Create a new todo..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => (e.key === "Enter" ? addItem() : null)}
              />
            </div>
            <div className="cont__list">
              <ul>
                {items.map((item) => {
                  return (
                    <li key={item.id}>
                      <div className="check">
                        <div
                          className={`check--icon ${
                            item.completed ? `comp` : ""
                          }`}
                          onClick={() => checkItem(item.id)}
                        >
                          <BsCheck />
                        </div>
                      </div>
                      <p className={`${item.completed ? `comp` : ""}`}>
                        {item.text}
                      </p>
                      <div className="edit">
                        <MdEdit />
                      </div>
                      <div className="del" onClick={() => deleteItem(item.id)}>
                        <BsTrash />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="cont__fillter">
              <div className="cont__fillter--side">
                <p>{items.length - compCount} item(s) left</p>
                <p onClick={clearCompleted}>Clear Completed</p>
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
