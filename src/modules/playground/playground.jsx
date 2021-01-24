import React from 'react';
import './playground.css';
import { connect } from 'react-redux';
import { Trap, Word, GameConsole } from '../../components';

const Playground = (props) => {
  const { onGuess, gussedLetters } = props;

  return (
    <div className="playground">
      <Trap missed={1} />
      <Word gussedLetters={props.gussedLetters} />
      <div>
        <div>Timer</div>
        <GameConsole onGuess={onGuess} gussedLetters={gussedLetters} />
        <div>New</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gussedLetters: state?.playground?.gussedLetters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGuess: (currentGuess) => dispatch({ type: 'GUESS_LETTER', currentGuess }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Playground));
