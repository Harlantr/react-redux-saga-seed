import {
  incrementWatcher,
  incrementAsyncWatcher,
  decrementWatcher,
  decrementAsyncWatcher,
} from './counter';

export default function* IndexSaga() {
  yield [
    incrementWatcher(),
    incrementAsyncWatcher(),
    decrementWatcher(),
    decrementAsyncWatcher(),
  ];
}
