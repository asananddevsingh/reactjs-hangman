import React, { useState, useEffect } from 'react';
import './playground.css';
import { connect } from 'react-redux';
import {
  Trap,
  Timer,
  Word,
  Restart,
  GameConsole,
  Result,
} from '../../components';
import { RESULTS } from '../../components/result/result';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Playground = (props) => {
  const {
    words,
    handleGuess,
    gussedLetters,
    handleRestart,
    hangleSaveGame,
  } = props;

  const getSelectedWord = () => {
    return words[Math.floor(Math.random() * words.length)]?.toUpperCase();
  };

  const [word, setWord] = useState(getSelectedWord());
  const [rightGuesses, setRightGuesses] = useState(0);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [result, setResult] = useState(null);
  const [shouldStopTimer, setShouldStopTimer] = useState(false);

  useEffect(() => {
    if (gussedLetters.length) {
      const lastGuess = gussedLetters[gussedLetters.length - 1];
      const isGuessMatched = word?.includes(lastGuess);
      if (isGuessMatched) {
        const rightAttempts = rightGuesses + 1;
        // Compair with the unique letters only.
        if (rightAttempts === [...new Set(word)]?.length) {
          setResult(RESULTS.WINNER.KEY);
          setShouldStopTimer(true);
        }
        setRightGuesses(rightAttempts);
      } else {
        const wrongAttempts = wrongGuesses + 1;
        if (wrongAttempts === 6) {
          setResult(RESULTS.LOSER.KEY);
          setShouldStopTimer(true);
        }
        setWrongGuesses(wrongAttempts);
      }
    }
  }, [gussedLetters?.length]);

  // Reset all the values to restart the game.
  const restartGame = () => {
    setWord(getSelectedWord());
    setRightGuesses(0);
    setWrongGuesses(0);
    handleRestart();
    setResult(null);
    setShouldStopTimer(false);
  };

  // Callback gets called on every time over.
  const onTimerOverCallback = () => {
    const wrongAttempts = wrongGuesses + 1;
    if (wrongAttempts === 6) {
      setResult(RESULTS.LOSER.KEY);
      setShouldStopTimer(true);
    }
    setWrongGuesses(wrongAttempts);
  };

  const generateGameDetails = () => {
    const data = {
      date: moment().format('DD/MM/YYYY'),
      error: wrongGuesses,
      won: !!result,
    };
    hangleSaveGame(data);
  };

  // Restart everything on unmount. (Like returning back from history page.)
  useEffect(() => {
    return restartGame;
  }, []);

  return (
    <div className="playground">
      <Trap missed={wrongGuesses} />
      <div className="wrapper">
        <Timer
          gusses={gussedLetters}
          onTimerOver={onTimerOverCallback}
          shouldStopTimer={shouldStopTimer}
        />
        <Word selectedWord={word} gussedLetters={gussedLetters} />
        <Restart onRestart={restartGame} />
      </div>
      {result ? (
        <Result result={result} />
      ) : (
        <GameConsole onGuess={handleGuess} gussedLetters={gussedLetters} />
      )}
      <div className="historyLink">
        <button onClick={generateGameDetails}> Save Game</button>
        <Link to="/history">See History</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    words: state?.playground?.words,
    gussedLetters: state?.playground?.gussedLetters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGuess: (currentGuess) =>
      dispatch({ type: 'GUESS_LETTER', currentGuess }),
    handleRestart: () => dispatch({ type: 'RESTART' }),
    hangleSaveGame: (gameDetails) =>
      dispatch({ type: 'SAVE_GAME', gameDetails }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Playground));
