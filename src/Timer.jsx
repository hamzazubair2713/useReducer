import React, { useEffect } from "react";

const Timer = ({ secondsRemaining, dispatch }) => {
  console.log(secondsRemaining);
  const minutes = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "checkTime" });
    }, 1000);
    return () => clearInterval(timer);
  }, [dispatch]);
  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes} : {sec < 10 && "0"}
      {sec}
    </div>
  );
};

export default Timer;
