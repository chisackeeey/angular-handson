import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectName } from '../state/hello.state';
import * as HelloActions from '../state/hello.actions';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  constructor(private store: Store<[]>) {}

  getName() {
    return this.store.select(selectName);
  }

  setName(name: string) {
    return this.store.dispatch(HelloActions.setName({ name }));
  }
}
