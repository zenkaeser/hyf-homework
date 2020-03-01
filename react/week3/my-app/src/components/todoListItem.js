import React, { useState } from "react";

export let NewDescription;
export const TodoListItem = ({
  id,
  description,
  deadline,
  onDelete,
  onEdit
}) => {
  const [checked, setChecked] = useState(false);
  const [toEdit, setToEdit] = useState(false);
  const [descr, setDescription] = useState("");

  const handleChecked = () => {
    setChecked(!checked);
  };
  const handleEdit = () => {
    setToEdit(!toEdit);
    setDescription(description);
  };
  const handleUpdate = id => {
    setDescription(descr);
    NewDescription = descr;
    setToEdit(!toEdit);
    onEdit(id);
  };

  const str = description + " | " + deadline;
  return (
    <ul>
      <li className="todoListItem">
        {toEdit ? (
          <input
            value={descr}
            onChange={event => setDescription(event.target.value)}
          />
        ) : (
          <span>
            {checked ? <strike>{str}</strike> : str}
            <input type="checkbox" onChange={handleChecked} />
          </span>
        )}
        <button onClick={onDelete}>Delete</button>
        {toEdit ? (
          <button onClick={() => handleUpdate(id)}>Update</button>
        ) : (
          <button onClick={() => handleEdit()}>Edit</button>
        )}
      </li>
    </ul>
  );
};
