import React, { useState, useEffect } from "react";
import { TodoListItem, NewDescription } from "./todoListItem";

const url =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

export const TodoLists = () => {
  const [newDescription, setDescription] = useState("");
  const [newDeadline, setDeadline] = useState("");
  const [todoList, setTodoList] = useState([]);
  const currDate = new Date();

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(url).then(response => {
        return response.json();
      });

      setTodoList(result);
    };
    getData();
  }, []);

  const handleNew = () => {
    const item = {
      description: newDescription,
      deadline: newDeadline
    };
    const list = [...todoList];

    if (item.description) {
      if (new Date(item.deadline) > currDate) {
        list.push(item);
        setDeadline("");
        setDescription("");
        setTodoList(list);
      } else {
        alert("Deadline cannot be an earlier date.");
      }
    } else alert("Description field cannot be blank.");
  };

  const handleDelete = id => {
    const newList = todoList;
    newList.splice(id, 1);
    setTodoList([...newList]);
  };

  const handleEdit = (descr, id) => {
    console.log("nd", descr, id);
    if (NewDescription) {
      const newList = todoList;

      for (let item of newList) {
        console.log(item);
        if (item.id === id) item.description = NewDescription;
      }
      setTodoList([...newList]);
    }
    console.log(descr);
  };

  const handleDescriptionChange = e => {
    setDeadline(e.target.value);
  };

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
          Add Todo{" "}
        </button>{" "}
      </div>
      {todoList.length === 0 ? <p>No Items</p> : null}
      {todoList.map((list, id) => {
        return (
          <TodoListItem
            key={id}
            id={id}
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
