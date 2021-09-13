import "./App.css";
import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { Switch, Route } from "react-router-dom";
import HomeTodo from "./Components/Todos/HomeTodo";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App({ props }) {
  return (
    <>
      <Header title="Todo List" />

      <Switch>
        <Route path="/todo" exact component={HomeTodo} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
