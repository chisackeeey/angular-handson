import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CounterActions from '../state/counter.actions';
import { selectCount } from '../state/counter.state';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor(private store: Store<[]>) {}

  getCount() {
    return this.store.select(selectCount);
  }

  up() {
    return this.store.dispatch(CounterActions.countUp());
  }

  down() {
    return this.store.dispatch(CounterActions.countDown());
  }

  power() {
    return this.store.dispatch(CounterActions.countPower());
  }
}
