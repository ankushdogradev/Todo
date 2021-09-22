// Reference: https://gracious-joliot-9a183c.netlify.app/

import React, { useState, useEffect, useCallback } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { BsCheck, BsTrash } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(filter);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFilter(items);
  };

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
      alert("Please Fill Data");
    } else if (inputText && toggleEdit) {
      setItems(
        items.map((item) => {
          if (item.id === editID) {
            return { ...item, text: inputText };
          }
          return item;
        })
      );
      setToggleEdit(false);
      setInputText("");
      setEditID(null);
    } else {
      setItems([...items, { id: uniqid(), text: inputText, completed: false }]);
      console.log(items);
      setInputText("");
    }
  };

  const editItem = (i) => {
    let newEditItem = items.find((item) => {
      return item.id === i;
    });
    console.log(newEditItem.text);
    setToggleEdit(true);
    setInputText(newEditItem.text);
    setEditID(i);
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

  const filterHandler = useCallback(() => {
    switch (status) {
      case "completed":
        setFilter(items.filter((item) => item.completed === true));
        break;
      case "active":
        setFilter(items.filter((item) => item.completed === false));
        break;
      default:
        setFilter(items);
        break;
    }
  }, [items, status]);

  const showCompleted = () => {
    setStatus("completed");
  };

  const showActive = () => {
    setStatus("active");
  };

  const showAll = () => {
    setStatus("all");
  };

  const saveLocalTodos = useCallback(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setItems(todoLocal);
    }
  };

  // Run Once in beggining
  useEffect(() => {
    document.documentElement.classList.remove("preload");
    getLocalTodos();
  }, []);

  useEffect(() => {
    let comp = items.filter((item) => {
      return item.completed;
    });
    setCompCount(comp.length);
    filterHandler();
    saveLocalTodos();
  }, [items, status, filterHandler, saveLocalTodos]);

  return (
    <>
      <div className="todo">
        <div className="bg--img">
          <div className="head mar">
            <h1>TODO</h1>
            <ThemeToggle />
          </div>
          <div className="cont mar">
            <div className={`cont__input ${toggleEdit ? "edit" : ""}`}>
              {toggleEdit ? (
                <MdEdit style={{ fontSize: "2rem" }} />
              ) : (
                <div className="cont__input--circle"></div>
              )}
              <input
                type="text"
                placeholder="Create a new todo..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => (e.key === "Enter" ? addItem() : null)}
                className={`${toggleEdit ? "edit" : ""}`}
              />
            </div>
            <div className="cont__list">
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="filter">
                  {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                      {filter.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided) => (
                              <li
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <div className="check">
                                  <div
                                    className={`check--icon ${
                                      item.completed ? `comp` : ""
                                    }`}
                                    onClick={() => checkItem(item.id)}
                                  >
                                    <BsCheck style={{ fontSize: "1.3rem" }} />
                                  </div>
                                </div>
                                <p
                                  className={`${item.completed ? `comp` : ""}`}
                                >
                                  {item.text}
                                </p>
                                <div
                                  className="edit"
                                  onClick={() => editItem(item.id)}
                                >
                                  <MdEdit style={{ fontSize: "1.3rem" }} />
                                </div>
                                <div
                                  className="del"
                                  onClick={() => deleteItem(item.id)}
                                >
                                  <BsTrash style={{ fontSize: "1.3rem" }} />
                                </div>
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
            <div className="cont__fillter">
              <div className="cont__fillter--side">
                <p>{items.length - compCount} item(s) left</p>
                <p onClick={clearCompleted}>Clear Completed</p>
              </div>
              <div className="cont__fillter--center">
                <p onClick={showAll}>All</p>
                <p onClick={showActive}>Active</p>
                <p onClick={showCompleted}>Complete</p>
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
