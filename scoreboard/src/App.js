import React, { useState } from "react";

import "./App.css";
import Display from "./components/Display";
import Controller from "./components/Controller";

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  return (
    <div className="app-container">
      <div className="App">
        <Display strikes={strikes} balls={balls} />
      </div>
      <Controller />
    </div>
  );
}

export default App;
