/*
 * this file will combine all sagas and return the rootSaga
 * and in create.js
 * rootSaga will be `run`ed by saga middleware
 */

// listen for actions being dispatched, take them and run them via worker saga
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

// 1. worker saga
export function* workerSaga() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put({ type: 'cra/surveys/LOAD', response: response.data });
  } catch (e) {
    // handle error here
    // yield put({ type: 'FOO_ACTION_FAILED', message: e.message });
  }
}

// 2. watcher saga
// spawn new async task on each ACTION we care
export function* watcherSaga() {
  yield takeEvery('FOO_ACTION', workerSaga);
}

// 3. root saga
// single entry point for all sagas
export default function* rootSaga() {
  yield [
    // all sagas
    watcherSaga(),
  ];
}
