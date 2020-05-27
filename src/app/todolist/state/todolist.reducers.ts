import { createReducer, on, Action } from '@ngrx/store';
import { TodolistState, initialState } from './todolist.state';
import * as TodolistActions from './todolist.actions';

export const reducer = createReducer(
  initialState,
  on(TodolistActions.addTodo, (state, { title }) => ({
    ...state,
    todolist: [
      ...state.todolist,
      { id: state.todolist.length, title, done: false },
    ],
  })),
  on(TodolistActions.toggleComplete, (state, { id }) => ({
    ...state,
    todolist: state.todolist.map((todo) => {
      if (todo.id === id) {
        return { id: todo.id, title: todo.title, done: !todo.done };
      } else {
        return todo;
      }
    }),
  }))
);

export function todolistReducer(state: TodolistState, action: Action) {
  return reducer(state, action);
}
