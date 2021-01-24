import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './history.css';
import { Link } from 'react-router-dom';

const History = (props) => {
  const { getGameHistory, gameHistory, isLoading } = props;

  useEffect(() => {
    getGameHistory();
  }, []);

  const renderHistory = () => {
    if (gameHistory) {
      return Object.values(gameHistory).map((game, index) => {
        const { date, error, won } = game;
        return (
          <div className="row tbody" key={index}>
            <div>{date}</div>
            <div>{error}</div>
            <div>{won ? 'Won' : 'Lost'}</div>
          </div>
        );
      });
    }
  };

  return (
    <div className="tableWrapper">
      <div className="table">
        <div className="row thead">
          <div>Date</div>
          <div>Errors</div>
          <div>Result</div>
        </div>
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          renderHistory()
        )}
      </div>
      <div className="link">
        <Link to="/">Play Again</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gameHistory: state?.history?.data,
    isLoading: state?.history?.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGameHistory: () => dispatch({ type: 'GET_GAME_HISTORY' }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(History));
