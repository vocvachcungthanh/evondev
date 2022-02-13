import React from "react";

function Cell({ onClick, value }) {
  return (
    <div
      className={`game-cell ${value === "X" ? "text-red" : ""}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
}

export default Cell;
