import React from 'react';
import './gameConsole.css';
import { KEYS } from './gameConsoleConstants';

const GameConsole = (props) => {
  const { onGuess, gussedLetters } = props;

  const handleClick = (event) => {
    onGuess(event?.target?.innerText);
  };

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
