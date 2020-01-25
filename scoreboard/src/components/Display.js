import React from "react";

const Display = props => {
  return (
    <div className="display-container">
      <div className="display-score">
        <h2>Strikes</h2>
        <div className="score">{props.strikes}</div>
      </div>
      <div className="display-score">
        <h2>Balls</h2>
        <div className="score ">{props.balls}</div>
      </div>
    </div>
  );
};

export default Display;
