import { all, put, takeLatest, call } from 'redux-saga/effects';

function* onPlayRequest() {
  yield takeLatest('PLAY_REQUEST', playRequest);
}

function* playRequest(action) {
  yield put({
    type: 'PLAY_RESPONSE_SUCCESS',
    payload: 'Playing',
  });
}

function* playgroundSagas() {
  yield all([onPlayRequest()]);
}

export default playgroundSagas;
