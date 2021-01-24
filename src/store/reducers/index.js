import { combineReducers } from 'redux';
import playgroundReducer from './playgroundReducer';
import historyReducer from './historyReducer';

const rootReducer = combineReducers({
  playground: playgroundReducer,
  history: historyReducer,
});

export default rootReducer;
