import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todolist]Add Todo',
  props<{ title: string }>()
);

export const toggleComplete = createAction(
  '[Todolist]Toggle Complete',
  props<{ id: number }>()
);
