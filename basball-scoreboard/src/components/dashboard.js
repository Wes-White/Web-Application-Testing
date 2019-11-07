import React, { useState } from "react";

function Dashboard() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  return (
    <div className="container">
      <div className="Scores">
        <h2>{strikes}</h2>
        <h2>{balls}</h2>
      </div>
      <div className="Buttons">
        <button>Strike</button>
        <button>Ball</button>
        <button>Foul</button>
      </div>
    </div>
  );
}

export default Dashboard;
