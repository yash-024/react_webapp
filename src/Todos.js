import React from "react";
import { TodoItems } from "./TodoItems";

const Todos = (props) => {
  return (
    <>
      <div className="container">
        <h3 className="text-center"> All Details </h3>
        {console.log("todos: " + props)}
        {props.todos.length === 0
          ? "No Todo to Display"
          : props.todos.map((todo) => {
              return (
                <TodoItems
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
              );
            })}
      </div>
    </>
  );
};

export default Todos;
