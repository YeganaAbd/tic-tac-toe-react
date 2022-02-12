function WinnerMsg({ winner }) {
  if (winner) {
    return <h2>Winner: {winner}</h2>;
  } else {
    return <h2>Good Luck!</h2>;
  }
}

export default WinnerMsg;
