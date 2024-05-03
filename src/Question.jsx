import React from "react";

const Question = ({ question, answer, dispatch }) => {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((elem, ind) => (
          <button
            key={ind}
            className={`btn btn-option ${ind === answer ? "answer" : ""} ${
              answer !== null
                ? ind === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: ind })}
            disabled={answer !== null}
          >
            {elem}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
