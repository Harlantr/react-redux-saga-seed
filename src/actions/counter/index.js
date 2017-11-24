import {
  INCREMENT_ASYNC_REQUESTED,
  INCREMENT_REQUESTED,
  DECREMENT_ASYNC_REQUESTED,
  DECREMENT_REQUESTED,
} from '../../constants/counterActions';

export const increment = () => ({
  type: INCREMENT_REQUESTED,
});

export const incrementAsync = () => ({
  type: INCREMENT_ASYNC_REQUESTED,
});

export const decrement = () => ({
  type: DECREMENT_REQUESTED,
});

export const decrementAsync = () => ({
  type: DECREMENT_ASYNC_REQUESTED,
});
