import React from 'react';
import './result.css';

export const RESULTS = {
  WINNER: {
    KEY: 'WINNER',
    MSG: 'Congratulation! YOU WON.',
  },
  LOSER: {
    KEY: 'LOSER',
    MSG: 'Oops! YOU LOST, TRY AGAIN.',
  },
};

const Result = ({ result }) => {
  return <div className={`result ${result}`}>{RESULTS[result].MSG}</div>;
};

export default React.memo(Result);
