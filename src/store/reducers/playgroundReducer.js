import { MOVIES } from './mockData';

const initialState = {
  words: MOVIES,
  gussedLetters: [],
};

const playgroundReducer = (state = initialState, action) => {
  state = state || initialState;

  switch (action.type) {
    case 'GUESS_LETTER':
      return {
        ...state,
        gussedLetters: [...state.gussedLetters, action.currentGuess],
      };
    case 'RESTART':
      return {
        ...state,
        gussedLetters: [],
      };
    default:
      return state;
  }
};

export default playgroundReducer;
