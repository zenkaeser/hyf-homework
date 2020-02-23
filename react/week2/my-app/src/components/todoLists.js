import React, { useState } from "react";
import { TodoListItem } from "./todoListItem";

export const TodoLists = () => {
  const myList = [
    {
      title: "Get out of Bed"
    },
    {
      title: "Brush Teeth"
    },
    {
      title: "Eat Breakfast"
    }
  ];

  const [todoList, setTodoList] = useState([...myList]);
  const handleNew = () => {
    const item = {
      title: "Random List"
    };
    const list = [...todoList];
    list.push(item);
    setTodoList(list);
  };

  const handleDelete = id => {
    const newList = todoList;
    newList.splice(id, 1);
    setTodoList([...newList]);
  };

  return (
    <div>
      <button onClick={handleNew}>Add Todo </button>
      {todoList.map((list, id) => {
        return (
          <TodoListItem
            key={id}
            title={list.title}
            onDelete={() => handleDelete(id)}
          />
        );
      })}
    </div>
  );
};
