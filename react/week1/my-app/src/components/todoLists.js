import React from "react";
import { TodoListItem } from "./todoListItem";

export const TodoLists = ({myList}) => {
    return (
        <div className="my-list">
            {myList.map((list, key) => {
                return (
                    <TodoListItem
                        key={key}
                        title={list.title}
                        created_date={list.created_date}
                        description={list.description}
                        deadline_date={list.deadline_date}>
                    </TodoListItem>
                )
            })}
        </div>
    );
}