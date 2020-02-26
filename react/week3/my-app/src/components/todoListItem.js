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
  const [descr, setDescription] = useState(description);

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleEdit = () => {
    setToEdit(!toEdit);
  };
  const handleUpdate = () => {
    setDescription(descr);
    NewDescription = descr;
    setToEdit(!toEdit);
    onEdit(descr, id + 1);
  };

  const str = description + " | " + deadline;
  return (
    <ul>
      <li className="todoListItem">
        {toEdit ? (
          <input
            placeholder="description"
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
          <button onClick={() => handleUpdate()}>Update</button>
        ) : (
          <button onClick={() => handleEdit()}>Edit</button>
        )}
      </li>
    </ul>
  );
};
