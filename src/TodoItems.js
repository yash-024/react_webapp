import React from "react";
import firebase from "firebase/compat";
import db from "./firebase";

export const TodoItems = ({ todo, id, onDelete }) => {
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
              onClick={(event) => db.collection("todos").doc(id).delete()}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
