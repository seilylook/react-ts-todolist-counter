import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy, decreaseBy } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  const onIncreaseBy = useCallback(
    (diff: number) => {
      dispatch(increaseBy(diff));
    },
    [dispatch]
  );

  const onDecreaseBy = useCallback(
    (diff: number) => {
      dispatch(decreaseBy(diff));
    },
    [dispatch]
  );

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
      onDecreaseBy={onDecreaseBy}
    />
  );
};

export default CounterContainer;
