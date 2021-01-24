import { all } from 'redux-saga/effects';
import playgroundSagas from './playgroundSagas';

function* rootSaga() {
  yield all([playgroundSagas()]);
}

export default rootSaga;
