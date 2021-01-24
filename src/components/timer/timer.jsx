import React, { useState, useEffect } from 'react';
import './timer.css';

const DURATION = 99;

const Timer = (props) => {
  const { gusses, onTimerOver, shouldStopTimer } = props;
  const [timer, setTimer] = useState(DURATION);

  // Rest timer on every guess.
  useEffect(() => {
    setTimer(DURATION);
  }, [gusses]);

  // Watch change in timer and force stop.
  useEffect(() => {
    let interval;
    if (!shouldStopTimer) {
      interval = setInterval(() => {
        if (timer) {
          setTimer(timer - 1);
        } else {
          onTimerOver(true);
          setTimer(DURATION);
        }
      }, 1000);
    } else {
      setTimer(DURATION);
    }
    // Clear the timer on Component Unmount.
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timer, shouldStopTimer]);

  return <div className="timer">{timer}</div>;
};

export default React.memo(Timer);
