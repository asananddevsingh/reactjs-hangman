const initialState = { name: 'Playground' };

const playgroundReducer = (state = initialState, action) => {
  state = state || initialState;

  switch (action.type) {
    case 'PLAY_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'PLAY_RESPONSE_SUCCESS':
      return {
        ...state,
        loading: false,
        response: 'Hello',
      };
    default:
      return state;
  }
};

export default playgroundReducer;
