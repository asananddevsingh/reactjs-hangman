import { combineReducers } from 'redux';
import playgroundReducer from './playgroundReducer';

const rootReducer = combineReducers({
  playground: playgroundReducer,
});

export default rootReducer;
