import React, { useState } from "react";

function Dashboard() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  if (strikes > 2) {
    setStrikes(0);
  } else if (balls > 3) {
    setBalls(0);
  }
  function handleFoul() {
    if (strikes <= 1) {
      setStrikes(strikes + 1);
    }
  }

  function handleClear() {
    return setStrikes(0) & setBalls(0);
  }
  const handleStrikes = () => setStrikes(strikes + 1);
  const handleBalls = () => setBalls(balls + 1);
  return (
    <div className="container">
      <div className="Scores">
        <h2>{strikes}</h2>
        <h2>{balls}</h2>
      </div>
      <div className="Buttons">
        <button onClick={handleStrikes}>Strike</button>
        <button onClick={handleBalls}>Ball</button>
        <button onClick={handleFoul}>Foul</button>
        <button onClick={handleClear}>Batter Hit</button>
      </div>
    </div>
  );
}

export default Dashboard;
