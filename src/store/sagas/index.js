import { all } from 'redux-saga/effects';
import historySagas from './historySagas';

function* rootSaga() {
  yield all([historySagas()]);
}

export default rootSaga;
