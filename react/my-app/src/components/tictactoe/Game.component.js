import "./GameStyles.css";
import React from "react";
import Board from "./Board.component";
import { calculateWinner } from "../../helpers/CalculateWinner.helper";
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const gameReducer = (state, actions) => {
  // eslint-disable-next-line default-case
  switch (actions.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = actions.payload;

      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET":
      return initialState;
  }
  return state;
};
function Game() {
  const [state, dispatch] = React.useReducer(gameReducer, initialState);

  const winner = calculateWinner(state.board);
  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };
  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div className="game">
      {winner && (
        <div className="game-winner">{winner ? `Winner is ${winner}` : ""}</div>
      )}
      <Board cells={state.board} onClick={handleClick} />

      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
}
export default Game;
