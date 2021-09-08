import React from "react";

export const TodoItems = ({ todo, onDelete }) => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="shadow p-3">
            {/* <div>{todo.sno}</div> */}
            <div>{todo.name}</div>
            <div>{todo.desc}</div>

            <button
              className="btn btn-sm btn-danger"
              onClick={() => onDelete(todo)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
