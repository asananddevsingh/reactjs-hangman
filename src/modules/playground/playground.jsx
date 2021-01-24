import React from 'react';
import { connect } from 'react-redux';

const Playground = (props) => {
  return (
    <div>
      Playground
      <button onClick={props.onTest}>Test Saga</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTest: () => dispatch({ type: 'PLAY_REQUEST' }),
  };
};

export default connect(null, mapDispatchToProps)(React.memo(Playground));
