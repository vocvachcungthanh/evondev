import React from "react";
import Cell from "./Cell.component";

function Board({ cells, onClick }) {
  return (
    <div className="game-board">
      {cells.map((item, index) => (
        <Cell key={index} value={item} onClick={() => onClick(index)} />
      ))}
    </div>
  );
}
export default Board;
