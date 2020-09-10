import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Home from "./Components/Home";
import CreateEntries from "./Components/CreateEntries";
import Entries from "./Components/Entries";
import Footer from "./Components/Footer";
import axios from "axios";
import { baseURL } from "./constants";
import "./App.css";
import "./Styling/Nav.css";
import "./Styling/Entries.css";
import "./Styling/CreateEntries.css";
import "./Styling/About.css"
import "./Styling/Footer.css"

function App() {
  const [entries, setEntries] = useState([]);
  const [fetchEntries, setFetchEntries] = useState(false);

  useEffect(() => {
    const getEntries = async () => {
      const apiKey = {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      };
      const response = await axios.get(baseURL, apiKey);
      setEntries(response.data.records);
    };
    getEntries();
  }, [fetchEntries]);

  return (
    <div className="app">
      <div className="nav">
        <Route>
          <Nav />
        </Route>
        <div className="nav-info">
          <h1>Many Thanks</h1>
          <img
            src="https://www.swedishnomad.com/wp-content/images/2019/09/thank-you-in-different-languages.jpg"
            alt="Thank You in Many Languages"
          />
        </div>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/entries">
          <Entries
            entries={entries}
            setEntries={setEntries}
            fetchEntires={fetchEntries}
            setFetchEntries={setFetchEntries}
          />
        </Route>
        <Route exact path="/">
          <CreateEntries
            fetchEntires={fetchEntries}
            setFetchEntries={setFetchEntries}
          />
        </Route>
        <Route path='/'>
          <Footer />
        </Route>
      </div>
    </div>
  );
}

export default App;
