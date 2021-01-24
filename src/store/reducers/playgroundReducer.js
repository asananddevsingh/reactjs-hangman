const initialState = {
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
    default:
      return state;
  }
};

export default playgroundReducer;
