import { createAction } from '@ngrx/store';

export const countUp = createAction('[Counter]Increment Count');

export const countDown = createAction('[Counter]Decrement Count');

export const countPower = createAction('[Counter]Square Count');
