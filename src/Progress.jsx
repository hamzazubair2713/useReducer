import React from "react";

const Progress = ({ index, numQuestion, points, answer, totalPoints }) => {
  console.log(totalPoints);
  return (
    <header className="progress">
      <progress
        max={numQuestion.length}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion.length}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints} points
      </p>
    </header>
  );
};

export default Progress;
