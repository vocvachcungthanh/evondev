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
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
  };
  console.log(winner);
  return (
    <div className="game">
      {winner && (
        <div className="game-winner">{winner ? `Winner is ${winner}` : ""}</div>
      )}
      <Board cells={board} onClick={handleClick} />

      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
}
export default Game;
