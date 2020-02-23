import React, { useState } from "react";

export const TodoListItem = ({ title, onDelete }) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <ul>
      <li>
        {checked ? <strike>{title}</strike> : title}
        <input type="checkbox" onChange={handleChecked} />
        <button onClick={onDelete}>Delete</button>
      </li>
    </ul>
  );
};
