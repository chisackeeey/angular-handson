import { createAction } from '@ngrx/store';

export const CountUp = createAction('[Counter]Increment Count');

export const CountDown = createAction('[Counter]Decrement Count');

export const CountPower = createAction('[Counter]Square Count');
