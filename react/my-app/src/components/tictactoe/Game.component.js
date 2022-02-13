import "./GameStyles.css";
import React from "react";
import Board from "./Board.component";
import { calculateWinner } from "../../helpers/CalculateWinner.helper";

function Game() {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardClone = [...board];
    if (winner || boardClone[index]) return;
    boardClone[index] = xIsNext ? "X" : "0";
    setBoard(boardClone);
    setXIsNext(!xIsNext);
  };
  return (
    <div className="game">
      <Board cells={board} onClick={handleClick} />
    </div>
  );
}
export default Game;
