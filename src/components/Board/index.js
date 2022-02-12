import Cell from "../Cell";
import "./board.css";
function Board({ board, turn, onClick }) {
  return (
    <div className="board">
      {" "}
      {board.map((sq, i) => (
        <Cell
          turn={sq}
          key={i}
          onClick={() => {
            onClick(i);
          }}
        />
      ))}
    </div>
  );
}

export default Board;
