import logo from "./logo.svg";
import "./App.css";
import Todos from "./Todos";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import db from "./firebase";
import firebase from "firebase/compat";

function App({ props }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);

  //when the app loads, we need to listen to the database and fetch new todos as they get Added/removed
  useEffect(() => {
    //this code here... firebase when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const onDelete = (todo) => {
    // console.log("I am delete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodoData = (e) => {
    e.preventDefault();
    var AddNewTodo = {
      name: name,
      desc: desc,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    db.collection("todos").add(AddNewTodo);
    setTodos([...todos, AddNewTodo]);
    setName("");
    setDesc("");
  };
  console.log("todo === " + todos);
  return (
    <>
      {/* <ToastContainer /> */}
      <Header title="Todo List" />
      <div className="container py-5">
        <div className="">
          <>
            <div className="row justify-content-center">
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
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1"> Description </label>
                    <input
                      type="text"
                      className="form-control"
                      id="desc"
                      placeholder=""
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    />
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

                <ul className="list"></ul>
              </div>
            </div>
          </>
          <br />
        </div>
        <br />
        {todos && todos.length > 0 && (
          <Todos todos={todos} onDelete={onDelete} />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
