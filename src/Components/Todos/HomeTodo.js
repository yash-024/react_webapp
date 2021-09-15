import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import firebase from "firebase/compat";
import Todos from "./Todos";

function HomeTodo({ props }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState("");
  //when the app loads, we need to listen to the database and fetch new todos as they get Added/removed
  useEffect(() => {
    //this code here... firebase when the app.js loads
    //setTodos(snapshot.docs.map((doc) => doc.data()));
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //setTodos(snapshot.docs.map((doc) => doc.data()));
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data(),
          }))
        );
      });
  }, []);

  const addTodoData = (e) => {
    e.preventDefault();
    var AddNewTodo = {
      name: name,
      desc: desc,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    debugger;
    if (edit == true) {
      console.log(edit);
      db.collection("todos").doc(editID).set(AddNewTodo);
      setEdit(false);
    } else {
      db.collection("todos").add(AddNewTodo);
    }
    //setTodos([...todos, AddNewTodo]);
    setName("");
    setDesc("");
  };

  const editData = (todo, id) => {
    debugger;
    console.log("Todo" + todo);

    setName(todo.name);
    setDesc(todo.desc);
    setEditID(id);

    setEdit(true);
  };

  return (
    <>
      <div className="countiner p-5">
        <div className="row justify-content-center ">
          <div className="col-md-6">
            <h2 className=" text-center"> Add Details </h2>
            <form className="shadow p-4">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1"> Product Name </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder=""
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="exampleInputPassword1"> Description </label>
                <textarea
                  className="form-control"
                  id="desc"
                  rows="3"
                  placeholder=""
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                disabled={(!name, !desc)}
                type="submit"
                className="btn btn-primary w-100 my-3"
                onClick={addTodoData}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6">
            {todos && todos.length > 0 ? (
              <Todos todos={todos} editData={editData} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeTodo;
