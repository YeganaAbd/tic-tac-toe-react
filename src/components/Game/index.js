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

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board board={board} />
    </div>
  );
}

export default App;
