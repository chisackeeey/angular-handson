import { CounterState } from '../state/counter.state';
import * as CounterActions from './counter.actions';
import { counterReducer } from './counter.reducer';

let initialState: CounterState;

beforeEach(() => {
  initialState = {
    count: 2,
  };
});

describe('CountReducer', () => {
  it('should increment count', () => {
    const initState = initialState;
    const counterAction = CounterActions.countUp;
    const newState = counterReducer(initState, counterAction);

    expect(newState.count).toBe(3);
  });

  it('should decrement count', () => {
    const initState = initialState;
    const counterAction = CounterActions.countDown;
    const newState = counterReducer(initState, counterAction);

    expect(newState.count).toBe(1);
  });

  it('should square count', () => {
    const initState = initialState;
    const counterAction = CounterActions.countPower;
    const newState = counterReducer(initState, counterAction);

    expect(newState.count).toBe(4);
  });
});
