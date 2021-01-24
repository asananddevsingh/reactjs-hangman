import React, { useEffect } from 'react';
import './gameConsole.css';
import { KEYS } from './gameConsoleConstants';
import { connect } from 'react-redux';

const GameConsole = (props) => {
  const { onGuess, gussedLetters } = props;

  const handleClick = (event) => {
    console.log(event?.target?.innerText);
    onGuess(event?.target?.innerText);
  };

  useEffect(() => {
    console.log('gussedLetters :>> ', gussedLetters);
  }, [gussedLetters]);

  return (
    <div className="game-console">
      {KEYS.map((key) => {
        return (
          <button
            className="character"
            disabled={gussedLetters?.includes(key)}
            key={key}
            onClick={handleClick}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default React.memo(GameConsole);
