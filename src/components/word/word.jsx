import React from 'react';
import './word.css';

const Word = (props) => {
  const { gussedLetters } = props;
  const selectedWord = 'ANAND';

  return (
    <div className="word">
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {gussedLetters.includes(letter) ? letter : ''}
          </span>
        );
      })}
    </div>
  );
};

export default React.memo(Word);
