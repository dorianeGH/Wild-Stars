import React from "react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

export default function Timer() {
  const initialTimerValue = 0;
  const [secondsLeft, setSecondsLeft] = useState(initialTimerValue);
  const [chronoStarted, setChronoStarted] = useState(false);

  const handleChronoToggle = () => {
    setChronoStarted(!chronoStarted);
  };

  useEffect(() => {
    let timerId = null;
    if (chronoStarted) {
      timerId = setInterval(() => {
        setSecondsLeft((left) => left + 1);
      }, 1000);
    }
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [chronoStarted]);

  useEffect(() => {
    let timerId = null;
    if (chronoStarted) {
      timerId = setInterval(() => {
        setSecondsLeft((left) => left + 1);
      }, 1000);
    }
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [chronoStarted]);

  useEffect(() => {
    if (secondsLeft === 0) {
      setSecondsLeft(initialTimerValue);
    }
  }, [secondsLeft]);

  return (
    <>
      <button type='button' onClick={handleChronoToggle}>
        {chronoStarted ? "Stop" : "Start"}
      </button>
      <div className='text-xl'>
        {dayjs.duration(secondsLeft, "seconds").format("mm:ss")}
      </div>
    </>
  );
}
