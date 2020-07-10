import React from "react";
import "./App.css";
import Landing from "./Components/Landing";
import Privacy from "./Components/Privacy";
import Header from "./Components/Header";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>

        <Route path="/home" exact component={Landing} />
        <Route path="/" exact component={Landing} />
        <Route path="/privacy" exact component={Privacy} />

        <footer>
          <h3>503 Studios</h3>
          <a href="./privacy">Privacy Policy</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
