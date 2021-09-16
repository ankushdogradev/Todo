import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// > THEME SCSS: https://blog.prototypr.io/how-i-theme-my-react-app-with-sass-414e8f905541
//               https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae

// > RESPONSIVE: https://www.youtube.com/watch?v=VQraviuwbzU
//               https://raddy.co.uk/blog/advanced-media-queries-using-scss-part-1-2-and-3/

// > DRAG & DROP: https://www.youtube.com/watch?v=4bzJrEETW4w
//                https://www.youtube.com/watch?v=Q1PYQPK9TaM

// > LIVE SEARCH: https://www.youtube.com/watch?v=4rPUo2urPJg

// TODO:
// - View the optimal layout for the app depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Add new todos to the list
// - Mark todos as complete
// - Delete todos from the list
// - Filter by all/active/complete todos
// - Clear all completed todos
// - Toggle light and dark mode
// - **Bonus**: Drag and drop to reorder items on the list
