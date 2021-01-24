const initialState = {
  data: {},
  loading: false,
};

const historyReducer = (state = initialState, action) => {
  state = state || initialState;

  switch (action.type) {
    case 'GET_HISTORY_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_HISTORY_RESPONSE_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'GET_HISTORY_RESPONSE_FAIL':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'GAME_SAVED_SUCCESS':
      return {
        ...state,
        loading: false,
        message: 'Saved Successfully',
      };
    case 'GAME_SAVED_FAIL':
      return {
        ...state,
        loading: false,
        message: 'Saving Failed',
      };
    default:
      return state;
  }
};

export default historyReducer;
