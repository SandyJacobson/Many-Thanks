import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Form from "./Components/Form";
import CreateEntries from "./Components/CreateEntries";
import Entries from "./Components/Entries";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <div className="nav">
      <Route>
        <Nav />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/entries">
        <Entries />
      </Route>
      <h1>Many Thanks</h1>
      <img
        src="https://www.swedishnomad.com/wp-content/images/2019/09/thank-you-in-different-languages.jpg"
        alt="Thank You in Many Languages"
      />
      <Form />
    </div>
  );
}

export default App;
