import { useParams } from "react-router";
import Puzzle from "../components/Puzzle";
import dayjs from "dayjs";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const GamePage = () => {
  const { id, url } = useParams();
  console.log(id);
  const [isStart, setIsStart] = useState(true);

  const location = useLocation();
  const imgSrc = location.state != null ? location.state.url : "";
  console.log(imgSrc);

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
    <div>
      <h1>Jouez !</h1>
      <button type='button' onClick={handleChronoToggle}>
        {chronoStarted ? "Stop" : "Start"}
      </button>
      <div className='text-xl'>
        {dayjs.duration(secondsLeft, "seconds").format("mm:ss")}
      </div>
      <Puzzle />
    </div>
  );
};

export default GamePage;
