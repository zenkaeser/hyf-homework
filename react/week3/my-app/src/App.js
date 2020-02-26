import React, { useState, useEffect } from "react";
import { TodoLists } from "./components/todoLists";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  });

  return (
    <div className="App">
      <h3>My Todo List</h3>
      <p>You have used {count} seconds on this website</p>
      <TodoLists />
    </div>
  );
}

export default App;
