import React from "react";

const Display = props => {
  return (
    <div className="display-container">
      <div className="display-score">
        <h2>Strikes</h2>
        {props.strikes}
      </div>
      <div className="display-score">
        <h2>Balls</h2>
        {props.balls}
      </div>
    </div>
  );
};

export default Display;
