import React from "react";
import { TodoItems } from "./TodoItems";

const Todos = (props) => {
  return (
    <>
      <div>
        <h3 className="text-center"> All Details </h3>
        {/* <p>
          {props.todos.map((todo) => {
            return (
              <>
                <h1>Id :{todo.id}</h1>
                <h1>Todo : {todo.todo.name}</h1>
              </>
            );
          })}
        </p> */}
        {props.todos.length === 0
          ? "No Todo to Display"
          : props.todos.map((todo) => {
              return <TodoItems todo={todo.todo} id={todo.id} key={todo.id} />;
            })}
      </div>
    </>
  );
};

export default Todos;
