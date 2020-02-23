import React from 'react';
import './App.css';
import { TodoLists } from "./components/todoLists";

const myList = [
  {
      title: "Get out of Bed",
      created_date: "Wed Sep 13, 2017",
      description: "Better start early",
      deadline_date: "Sat Sep 16, 2017"
  },
  {
      title: "Brush Teeth",
      created_date: "Thu Sep 14, 2017",
      description: "Gotta do it for 2 minutes",
      deadline_date: "Sat Sep 16, 2017"
  }, 
  {
      title: "Eat Breakfast",
      created_date: "Fri Sep 15, 2017",
      description: "Eat like a king",
      deadline_date: "Sat Sep 16, 2017"
  }
]

function App() {
  return ( 
    <div className="App">
      <h3>My Todo List</h3>
      <TodoLists myList={myList}></TodoLists>
    </div>
    );
}

export default App;
