import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Display from "./components/display";
import Dashborad from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <Display />
      <Dashborad />
    </div>
  );
}

export default App;
