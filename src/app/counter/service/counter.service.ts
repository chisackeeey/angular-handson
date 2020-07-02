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
    this.store.dispatch(CounterActions.countUp());
  }

  down() {
    this.store.dispatch(CounterActions.countDown());
  }

  power() {
    this.store.dispatch(CounterActions.countPower());
  }
}
