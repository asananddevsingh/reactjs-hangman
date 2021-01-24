import React from 'react';
import './playground.css';
import { connect } from 'react-redux';

const Playground = (props) => {
  return (
    <div className="playground">
      <div>Trap</div>
      <div>Word</div>
      <div>
        <div>Timer</div>
        <div>Console</div>
        <div>New</div>
      </div>
    </div>
  );
};

export default connect(null, null)(React.memo(Playground));
