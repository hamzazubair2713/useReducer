import React from "react";

const FinishScreen = ({ points, maxPossiblePoints, highScore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored
        <strong> {points} </strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage) + `%`})
      </p>
      <p className="highscore">Highscore {highScore} points </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartQuiz" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;
