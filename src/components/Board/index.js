import Cell from "../Cell";
import "./board.css";
function Board({ board }) {
  return (
    <div className="board">
      {" "}
      {board.map((sq, i) => (
        <Cell value={sq} key={i} />
      ))}
    </div>
  );
}

export default Board;
