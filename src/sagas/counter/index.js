import { put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
  INCREMENT_ASYNC_REQUESTED,
  INCREMENT_REQUESTED,
  INCREMENT,
  DECREMENT_ASYNC_REQUESTED,
  DECREMENT_REQUESTED,
  DECREMENT,
} from '../../constants/counterActions';

function* increment() {
  yield put({
    type: INCREMENT,
  });
}

function* incrementAsync() {
  yield delay(2000);
  yield put({
    type: INCREMENT,
  });
}

function* decrement() {
  yield put({
    type: DECREMENT,
  });
}

function* decrementAsync() {
  yield delay(2000);
  yield put({
    type: DECREMENT,
  });
}

export function* incrementWatcher() {
  yield takeEvery(INCREMENT_REQUESTED, increment);
}

export function* incrementAsyncWatcher() {
  yield takeEvery(INCREMENT_ASYNC_REQUESTED, incrementAsync);
}

export function* decrementWatcher() {
  yield takeEvery(DECREMENT_REQUESTED, decrement);
}

export function* decrementAsyncWatcher() {
  yield takeEvery(DECREMENT_ASYNC_REQUESTED, decrementAsync);
}
