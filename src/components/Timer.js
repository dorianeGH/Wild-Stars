import { useEffect, useState, useContext } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import ChronoContext from "../contexts/ChronoContext";

dayjs.extend(duration);

export default function Timer() {
  //chrono
  const [seconds, setSeconds] = useState(0);
  const { chronoStarted, setChronoStarted } = useContext(ChronoContext);

  // setChronoStarted(!chronoStarted);
  useEffect(() => {
    let timerId = null;
    if (chronoStarted) {
      timerId = setInterval(() => {
        setSeconds((sec) => sec + 1);
      }, 1000);
    }
    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [chronoStarted]);

  return (
    <div className="text-xl">
      {dayjs.duration(seconds, "seconds").format("mm:ss")}
    </div>
  );
}
