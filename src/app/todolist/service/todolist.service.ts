import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as TodolistActions from '../state/todolist.actions';
import { selectTodolist } from '../state/todolist.state';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  constructor(private store: Store<[]>) {}

  getTodolist() {
    return this.store.select(selectTodolist);
  }

  addTodo(title: string) {
    this.store.dispatch(TodolistActions.addTodo({ title }));
  }

  toggleComplete(id: number) {
    this.store.dispatch(TodolistActions.toggleComplete({ id }));
  }
}
