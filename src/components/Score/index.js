function Score({ winner }) {
  let scoreJerry = 0;
  let scoreTom = 0;
  if (winner === "Jerry") {
    scoreJerry = scoreJerry + 1;
  }
  if (winner === "Tom") {
    scoreTom = scoreTom + 1;
  }
  return (
    <div>
      <h3>
        Tom: {scoreTom} Jerry: {scoreJerry}
      </h3>
    </div>
  );
}

export default Score;
