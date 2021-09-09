import "./App.css";
import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";
import { Switch, Route } from "react-router-dom";
import HomeTodo from "./Components/Todos/HomeTodo";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";

function App({ props }) {
  return (
    <>
      <Header title="Todo List" />

      <Switch>
        <Route path="/todo" component={HomeTodo} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
