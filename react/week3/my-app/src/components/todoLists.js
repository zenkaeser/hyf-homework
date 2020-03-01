import React, { useState, useEffect } from "react";
import { TodoListItem, NewDescription } from "./todoListItem";

const url =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

export const TodoLists = () => {
  const [newDescription, setDescription] = useState("");
  const [newDeadline, setDeadline] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const currDate = new Date();

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(url).then(response => {
        return response.json();
      });

      setTodoLists(result);
    };
    getData();
  }, []);

  const handleNew = () => {
    const item = {
      id: 0,
      description: newDescription,
      deadline: newDeadline
    };

    if (item.description) {
      if (new Date(item.deadline) > currDate) {
        const newLists = todoLists;
        const lastList = newLists[newLists.length - 1];
        
        item.id = lastList.id + 1;
        newLists.push(item);
        setTodoLists([...newLists]);
        setDeadline("");
        setDescription("");
      } else {
        alert("Deadline cannot be an earlier date.");
      }
    } else alert("Description field cannot be blank.");
  };

  const handleDelete = id => {
    const newLists = todoLists;
    newLists.splice(id, 1);
    setTodoLists([...newLists]);
  };

  const handleEdit = id => {
    if (NewDescription) {
      const newList = todoLists;

      for (let item of newList) {
        if (item.id === id) item.description = NewDescription;
      }
      setTodoLists([...newList]);
    }
  };

  const handleDescriptionChange = e => setDeadline(e.target.value);

  return (
    <div>
      <input
        id="description"
        placeholder="description"
        value={newDescription}
        onChange={event => setDescription(event.target.value)}
      />
      <input
        id="date"
        type="date"
        placeholder="dd/mm//yyyy"
        value={newDeadline}
        onChange={handleDescriptionChange}
      />
      <div>
        <button className="add" onClick={handleNew}>
          Add Todo
        </button>
      </div>
      {todoLists.length === 0 ? <p>No Items</p> : null}
      {todoLists.map((list, id) => {
        return (
          <TodoListItem
            key={id}
            id={list.id}
            description={list.description}
            deadline={list.deadline}
            onDelete={() => handleDelete(id)}
            onEdit={handleEdit}
          />
        );
      })}
    </div>
  );
};
