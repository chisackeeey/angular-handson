import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CounterActions from './counter/state/counter.actions';
import { selectCount } from './counter/state';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor(private store: Store<[]>) {}

  getCount() {
    return this.store.select(selectCount);
  }

  up() {
    return this.store.dispatch(CounterActions.CountUp());
  }

  down() {
    return this.store.dispatch(CounterActions.CountDown());
  }
}
