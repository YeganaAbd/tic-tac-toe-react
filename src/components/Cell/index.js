import "./Cell.css";
function Cell({ turn, onClick }) {
  const styleTurn = turn ? `cell ${turn}` : `cell`;
  return <div className={styleTurn} onClick={onClick}></div>;
}
export default Cell;
