import { all, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

const BASE_URL = 'https://react-my-burger-0414.firebaseio.com/hangman.json';

const apiCallGetHistory = async () => {
  return await axios
    .get(BASE_URL)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

// GET SAVED GAMES.

// Watcher Function
function* onGetGameHistory() {
  yield takeLatest('GET_GAME_HISTORY', getGameHistory);
}

// Worker Function
function* getGameHistory() {
  yield put({
    type: 'GET_HISTORY_REQUEST',
  });

  const response = yield call(apiCallGetHistory);

  if (response && response?.status === 200) {
    yield put({
      type: 'GET_HISTORY_RESPONSE_SUCCESS',
      payload: response.data,
    });
  } else {
    yield put({
      type: 'GET_HISTORY_RESPONSE_FAIL',
      payload: response.error,
    });
  }
}

/**
 * ================ SAVE GAME
 */

const apiCallSaveGame = async (data) => {
  return await axios
    .post(BASE_URL, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

function* onSaveGame() {
  yield takeLatest('SAVE_GAME', saveGame);
}

function* saveGame(action) {
  const response = yield call(() => apiCallSaveGame(action?.gameDetails));

  if (response && response?.status === 200) {
    yield put({
      type: 'GAME_SAVED_SUCCESS',
    });
  } else {
    yield put({
      type: 'GAME_SAVED_FAIL',
    });
  }
}

function* historySagas() {
  yield all([onGetGameHistory(), onSaveGame()]);
}

export default historySagas;
