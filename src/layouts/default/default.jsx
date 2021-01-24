import React from 'react';
import './default.css';

const Default = (props) => {
  return (
    <main className="main">
      <header>
        <h1>The Hangman Game</h1>
      </header>
      <section>{props.children}</section>
    </main>
  );
};

export default React.memo(Default);
