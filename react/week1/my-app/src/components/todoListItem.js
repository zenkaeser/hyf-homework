import React from "react";

export const TodoListItem  = ({title, created_date, description, deadline_date}) => {
   return (
      <ul className="todolist-item">
         <li>{title}</li>
         <li>{created_date}</li>
         <li>{description}</li>
         <li>{deadline_date}</li>
      </ul>  
   );
}