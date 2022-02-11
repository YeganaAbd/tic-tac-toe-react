import Square from "../Square";

function Board({ board }) {
  return (
    <div className="board">
      {" "}
      {board.map((sq, i) => (
        <Square value={sq} key={i} />
      ))}
    </div>
  );
}

export default Board;
