import { useRef, useState } from "react";

export default function StopWatch() {
  const ref = useRef(null);

  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    ref.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  let secondsPassed = 0;

  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  const handleStop = () => {
    clearInterval(ref.current);
  };

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
