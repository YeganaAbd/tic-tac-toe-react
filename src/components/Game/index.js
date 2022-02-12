import "./Game.css";
import Board from "../Board";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [xTurn, setXTurn] = useState(true);

  const turn = xTurn ? "X" : "O";
  function checkWinner(cells) {
    const winnerCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerCombination.length; i++) {
      const [a, b, c] = winnerCombination[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  }
  const winner = checkWinner(board);

  function handleMove(i) {
    if (winner || board[i]) {
      return;
    }

    setBoard([...board.slice(0, i), turn, ...board.slice(i + 1)]);
    setXTurn(!xTurn);
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board board={board} onClick={handleMove} turn={turn} />
      <h3>Winner: {winner}</h3>
    </div>
  );
}

export default App;
