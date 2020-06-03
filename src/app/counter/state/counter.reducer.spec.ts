import { CounterState } from '../state/counter.state';
import * as CounterActions from './counter.actions';
import { counterReducer } from './counter.reducer';

const initialState: CounterState = {
  count: 2,
};

describe('countUp', () => {
  it('should return isLoading true', () => {
    const initState = initialState;
    const counterAction = CounterActions.countUp;
    const newState = counterReducer(initState, counterAction);

    expect(newState.count).toBe(3);
  });
});

describe('countDown', () => {
  it('should return isLoading true', () => {
    const initState = initialState;
    const counterAction = CounterActions.countDown;
    const newState = counterReducer(initState, counterAction);

    expect(newState.count).toBe(1);
  });
});

describe('countPower', () => {
  it('should return isLoading true', () => {
    const initState = initialState;
    const counterAction = CounterActions.countPower;
    const newState = counterReducer(initState, counterAction);

    expect(newState.count).toBe(4);
  });
});
